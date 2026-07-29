'use client'
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <div>
      <button 
        onClick={() => signOut({ callbackUrl: '/' })}
        style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Sign Out
      </button>
    </div>
  );
}