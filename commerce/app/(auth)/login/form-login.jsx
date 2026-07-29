"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      identifier: email,
      password: password,
      redirect: false,
    });

    if (res?.ok) {
      // التوجيه عبر window.location يضمن إعادة تحميل الهيدر وكافة المكونات بالجلسة الجديدة فوراً
      window.location.href = "/";
    } else {
      setErrorMessage("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            تسجيل الدخول
          </h2>
          <p className="text-sm text-slate-500">
            أهلاً بك مجدداً! يرجى إدخال بياناتك للمتابعة.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 block"
            >
              البريد الإلكتروني
            </label>
            <input
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-left"
              type="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                كلمة المرور
              </label>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:text-blue-500 hover:underline"
              >
                نسيت كلمة المرور؟
              </a>
            </div>
            <input
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-left"
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-150"
          >
            تسجيل الدخول
          </button>
        </form>
        <div className="flex justify-center gap-4">
          <button onClick={() => signIn("google", { callbackUrl: "/profile" })} className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-150">
            Google
          </button>
          <button className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-150">
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-slate-500">
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            ليس لديك حساب؟
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
