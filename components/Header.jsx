

export default async function Header() {
    const response1 = await fetch(`${process.env.API_BASE_URL}/get_stats_total_patient`, { cache: 'no-store' });
    const response2 = await fetch(`${process.env.API_BASE_URL}/get_stats_total_major_injured`, { cache: 'no-store' });

    const totalPatients = await response1.json();
    const totalMajorInjured = await response2.json();
    return (
        <>
            <div className="flex justify-center">
                <h1 className="py-3 font-semibold text-4xl lg:max-w-[900px] lg:text-center lg:leading-tight">
                    Live Database of Patients from the Student Movement & Flood
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-100 text-red-600 rounded-2xl py-3 px-6 flex flex-col items-center">
                    <span className="font-semibold">Current Injured Patients</span>
                    <span className="text-2xl font-bold">{totalPatients.total_patients}</span>
                </div>
                <div className="bg-yellow-100 text-orange-600 rounded-2xl py-3 px-6 flex flex-col items-center">
                    <span className="font-semibold">Critically Injured</span>
                    <span className="text-2xl font-bold">{totalMajorInjured.count_major_injury}</span>
                </div>
                <div className="bg-green-100 text-green-600 rounded-2xl py-3 px-6 flex flex-col items-center">
                    <span className="font-semibold">Fund Raised (BDT)</span>
                    <span className="text-2xl font-bold">31,500</span>
                </div>
            </div>
        </>

    )
}
