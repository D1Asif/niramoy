"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function LoginPage({ searchParams: { toast_message } }) {
  const router = useRouter();
  const initialized = useRef(false);

  useEffect(() => {
    if (toast_message === 'signup_success' && !initialized.current) {
      initialized.current = true;
      toast.success("Signed up successfully!");
      router.replace("/login");
    }
    if (toast_message === 'login_required' && !initialized.current) {
      initialized.current = true;
      toast.error("Login required!");
      router.replace("/login");
    }
  }, [router, toast_message]);

  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <LoginForm />
    </div>

  )
}
