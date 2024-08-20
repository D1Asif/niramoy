

export default function PatientListTable() {
    return (
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
    )
}
