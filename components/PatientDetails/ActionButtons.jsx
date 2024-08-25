"use client"

import { deletePatientAction } from "@/actions";
import Link from "next/link";
import toast from "react-hot-toast";


export default function ActionButtons({patient}) {
    return (
        <div className="flex gap-3 items-center justify-center ">
            <Link 
                className="border rounded py-2 px-3 cursor-pointer text-slate-600 dark:text-slate-300 border-gray-600 dark:border-gray-300"
                href={`/patients/${patient?.id}/edit`}
            >
                Edit Entry
            </Link>
            <button 
                className="border rounded py-2 px-3 text-red-500 border-red-500"
                onClick={async () => {
                    const result = await deletePatientAction(patient?.id);
                    console.log({result});
                    if (result === "success") {
                        toast.success("Success");
                    } else {
                        toast.error("Error");
                    }
                }}
            >
                Delete Entry
            </button>
        </div>
    )
}
