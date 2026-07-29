"use client";

import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";

export default function EmailConfirmation() {
  const searchParams = useSearchParams();
  const confirmationToken = searchParams.get("confirmation");
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const confirmEmail = async () => {
      if (!confirmationToken) {
        setStatus("invalid");
        return;
      }

      try {
        const res = await fetch(`http://localhost:1337/api/auth/email-confirmation?confirmation=${confirmationToken}`);
        
        if (res.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    };

    confirmEmail();
  }, [confirmationToken]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Email Confirmation</h2>
        
        {status === "verifying" && (
          <p className="text-gray-600">Verifying your email, please wait...</p>
        )}

        {status === "success" && (
          <div className="space-y-3">
            <p className="text-emerald-600 font-medium">Your email has been successfully verified!</p>
            <a 
              href="/login" 
              className="inline-block w-full p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Go to Login
            </a>
          </div>
        )}

        {status === "error" && (
          <p className="text-rose-600 font-medium">The link is invalid or has expired.</p>
        )}

        {status === "invalid" && (
          <p className="text-rose-600 font-medium">Missing confirmation token.</p>
        )}
      </div>
    </div>
  );
}