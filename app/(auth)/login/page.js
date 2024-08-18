"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function LoginPage({ searchParams: { signup } }) {
  const router = useRouter();
  const initialized = useRef(false);

  useEffect(() => {
    if (signup === 'success' && !initialized.current) {
      initialized.current = true;
      toast.success("Signed up successfully");
      router.replace("/login");
    }
  }, [router, signup])
  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <LoginForm />
    </div>

  )
}
