"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LogoutBtn from "./LogoutBtn.jsx";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // جلب بيانات الجلسة من API الخاص بـ NextAuth عند تحميل الهيدر
  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setSession(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const isAuthPage =
    pathname?.includes("login") || pathname?.includes("register");

  if (isAuthPage) {
    return null;
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block text-teal-600">
          <span className="sr-only">Home</span>
          <img src="logo.svg" alt="logo" width={50} height={50} />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="transition hover:text-gray-500/75" href="#" style={{ color: "var(--prymary)" }}> Home </a>
              </li>
              <li>
                <a className="transition hover:text-gray-500/75" href="#" style={{ color: "var(--prymary)" }}> Explore </a>
              </li>
              <li>
                <a className="transition hover:text-gray-500/75" href="#" style={{ color: "var(--prymary)" }}> Project </a>
              </li>
              <li>
                <a className="transition hover:text-gray-500/75" href="#" style={{ color: "var(--prymary)" }}> About Us </a>
              </li>
              <li>
                <a className="transition hover:text-gray-500/75" href="#" style={{ color: "var(--prymary)" }}> Contact Us </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              {!loading && (!session?.user ? (
                <div className="flex gap-4">
                  <Link
                    id="mmm"
                    className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href="/login"
                    style={{ backgroundColor: "var(--prymary)" }}
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium transition hover:text-teal-600/75 sm:block"
                    href="/register"
                    style={{ color: "var(--prymary)" }}
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link href="/cart" className="relative p-2 text-gray-700 hover:text-teal-600 transition">
                    <ShoppingCart className="w-6 h-6" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="w-9 h-9 rounded-full object-cover border"
                      />
                    ) : (
                      <div
                        className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm"
                        style={{ backgroundColor: "var(--prymary)" }}
                      >
                        {session.user?.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}

                    <span className="text-sm font-medium text-gray-800 hidden md:block">
                      {session.user?.name}
                    </span>
                  </div>

                  <LogoutBtn />
                </div>
              ))}

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}