import Link from "next/link";


export default function PatientListTable() {
    return (
        <>
            <div className="flex justify-between items-center border-t border-black/10 dark:border-white/10 pt-8">
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
            <div className="overflow-x-auto py-4">
                <table className="w-full text-left">
                    <thead className="">
                        <tr>
                            <th className="px-4 py-2 text-gray-400">Serial</th>
                            <th className="px-4 py-2 text-gray-400">Name</th>
                            <th className="px-4 py-2 text-gray-400">Date</th>
                            <th className="px-4 py-2 text-gray-400">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Abul Kabul</td>
                            <td className="px-4 py-2">01-05-2023 01:12 AM</td>
                            <td className="px-4 py-2">
                                <button className="text-primary hover:underline">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Dabul Ebul</td>
                            <td className="px-4 py-2">27-08-2021 07:27 AM</td>
                            <td className="px-4 py-2">
                                <button className="text-primary hover:underline">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}
