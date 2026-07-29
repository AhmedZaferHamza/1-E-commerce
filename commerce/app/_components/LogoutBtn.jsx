'use client';

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
    >
      Logout
    </button>
  );
}