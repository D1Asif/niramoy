

export default function Header() {
    return (
        <>
            <div className="flex justify-center">
                <h1 className="py-3 font-semibold text-4xl">
                    Live Database of Injured Patients in the Student Movement
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-100 text-red-600 rounded-2xl py-3 px-6 flex flex-col items-center">
                    <span className="font-semibold">Current Injured Patients</span>
                    <span className="text-2xl font-bold">5000+</span>
                </div>
                <div className="bg-yellow-100 text-orange-600 rounded-2xl py-3 px-6 flex flex-col items-center">
                    <span className="font-semibold">Critically Injured</span>
                    <span className="text-2xl font-bold">3300+</span>
                </div>
                <div className="bg-green-100 text-green-600 rounded-2xl py-3 px-6 flex flex-col items-center">
                    <span className="font-semibold">Healed & Released</span>
                    <span className="text-2xl font-bold">100+</span>
                </div>
            </div>
        </>

    )
}
