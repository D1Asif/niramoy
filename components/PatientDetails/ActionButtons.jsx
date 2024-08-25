import Link from "next/link";


export default function ActionButtons({patient}) {
    return (
        <div className="flex gap-3 items-center justify-center ">
            <Link 
                className="border rounded py-2 px-3 cursor-pointer text-slate-600 dark:text-slate-300 border-gray-600 dark:border-gray-300"
                href={`/patients/${patient?.id}/edit`}
            >
                Edit Entry
            </Link>
            <p className="border rounded py-2 px-3 text-red-500 border-red-500 cursor-pointer">
                Delete Entry
            </p>
        </div>
    )
}
