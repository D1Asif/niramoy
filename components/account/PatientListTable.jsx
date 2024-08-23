import Link from "next/link";


export default function PatientListTable({ userPatients }) {
    return (
        <>
            <div className="flex justify-between items-center border-t border-black/10 dark:border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-primary">
                    Created/Updated Patients
                </h3>
                <Link href="/create-new-patient">
                    <button
                        className="block py-1 px-3 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                    >
                        +
                    </button>
                </Link>
            </div>
            {
                !!userPatients?.length ? (
                    <div className="overflow-x-auto py-4">
                        <table className="w-full text-left">
                            <thead className="">
                                <tr>
                                    <th className="px-4 py-2 text-gray-400">Serial</th>
                                    <th className="px-4 py-2 text-gray-400">Name</th>
                                    <th className="px-4 py-2 text-gray-400">Status</th>
                                    <th className="px-4 py-2 text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    userPatients?.map((patient, key) => (
                                        <tr>
                                            <td className="px-4 py-2">{key + 1}</td>
                                            <td className="px-4 py-2">{patient?.name}</td>
                                            <td className="px-4 py-2">{patient?.current_status}</td>
                                            <td className="px-4 py-2">
                                                <Link href={`/patients/${patient?.id}`} className="text-primary hover:underline">visit</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="py-3">
                        You have not created any patient entry yet.
                    </div>
                )
            }

        </>

    )
}
