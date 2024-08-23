"use client";

import CreateNewPatientForm from '@/components/PatientDetails/CreateNewPatientForm'
import { useEffect, useRef } from 'react'
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateNewPatientPage({ searchParams: { toast_message } }) {
  const router = useRouter();
  const initialized = useRef(false);

  useEffect(() => {
    if (toast_message === 'error' && !initialized.current) {
      initialized.current = true;
      toast.error("Error!");
      router.replace("/create-new-patient")
    }
  }, [router, toast_message]);

  return (
    <div className='container'>
      <CreateNewPatientForm />
    </div>
  )
}
