

export default function Header() {
    return (
        <>
            <div className="flex justify-center">
                <h1 className="py-3 font-semibold text-3xl">
                    Injured Patient Live Database of Quota Reform Movement
                </h1>
            </div>
            <div class="flex flex-col md:flex-row justify-around p-4 space-y-4 md:space-y-0 md:space-x-4">
                <div class="bg-red-100 text-red-600 rounded-full py-3 px-6 flex flex-col items-center">
                    <span class="font-semibold">Current Injured Patients</span>
                    <span class="text-2xl font-bold">5000+</span>
                </div>
                <div class="bg-yellow-100 text-orange-600 rounded-full py-3 px-6 flex flex-col items-center">
                    <span class="font-semibold">Critically Injured</span>
                    <span class="text-2xl font-bold">3300+</span>
                </div>
                <div class="bg-gray-100 text-gray-600 rounded-full py-3 px-6 flex flex-col items-center">
                    <span class="font-semibold">Healed & Released</span>
                    <span class="text-2xl font-bold">100+</span>
                </div>
            </div>
        </>

    )
}
