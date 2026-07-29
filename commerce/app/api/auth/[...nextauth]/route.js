import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const res = await fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              identifier: credentials?.identifier,
              password: credentials?.password,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data.jwt) {
            console.error("Strapi Login Failed:", data);
            return null;
          }

          return {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email,
            jwt: data.jwt,
          };
        } catch (error) {
          console.error("Fetch Error in authorize:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login", // أي خطأ سيعيد المستخدم لصفحة الدخول بسلام بدلاً من الصفحة السوداء
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await fetch(
            `http://localhost:1337/api/auth/google/callback?access_token=${account.access_token}`
          );
          const data = await res.json();

          if (res.ok && data.jwt) {
            user.jwt = data.jwt;
            return true;
          }
          return false;
        } catch (error) {
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.jwt = token.jwt;
        session.user.id = token.id;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };