import Image from "next/image";

export default function PatientDetails() {
    return (
        <section>
            <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl mb-10">
                <Image
                    className="w-full p-2 object-contain max-h-[300px] lg:max-h-[500px]"
                    src="/patient1.jpg"
                    height={500}
                    width={500}
                    alt="Patient Image"
                />
                <div className="flex flex-wrap justify-center mt-2 gap-3">
                    <Image
                        src="/patient1.jpg"
                        alt="Patient Image"
                        height={200}
                        width={200}
                        className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                    />
                    <Image
                        src="/patient1.jpg"
                        alt="Patient Image"
                        height={200}
                        width={200}
                        className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                    />
                    <Image
                        src="/patient1.jpg"
                        alt="Patient Image"
                        height={200}
                        width={200}
                        className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                    />
                    <Image
                        src="/patient1.jpg"
                        alt="Patient Image"
                        height={200}
                        width={200}
                        className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                    />
                    <Image
                        src="/patient1.jpg"
                        alt="Patient Image"
                        height={200}
                        width={200}
                        className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                    />
                    <Image
                        src="/patient1.jpg"
                        alt="Patient Image"
                        height={200}
                        width={200}
                        className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                    />
                </div>
            </div>

            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Personal Info
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Name : John Doe</li>
                    <li>Age : 20</li>
                    <li>Gender : Male</li>
                    <li>Additional Info : Abcd</li>
                    <li>Address (Home) : Abcd</li>
                    <li>Contact Number : 0198827161</li>
                </ul>
            </div>
            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Medical Info
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Current status (injured/recovered) : Injured</li>
                    <li>Date and Time of Admission: 21 July</li>
                    <li>Date and Time of Injury: 20 July</li>
                    <li>Hospital/clinic (currently registered in) : Dhaka Medical College </li>
                    <li>Affected Body Parts : Head, Shoulder </li>
                </ul>
            </div>
            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Funding Details
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Required fund type (Urgent/Required/Not required) : Required</li>
                    <li>Required fund amount (in BDT) : 2100</li>
                    <li>Raised fund amount (in BDT) : 900</li>
                    <li>Reason of fund requirement : Buy medicine</li>
                </ul>
            </div>
            <div className="mt-5 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl mb-3">
                    Documents
                </h2>
                <p className="mb-3">Medical proofs, prescription, medical bills etc.</p>
                <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl mb-10">
                    <Image
                        className="w-full p-2 object-contain max-h-[300px] lg:max-h-[500px]"
                        src="/patient1.jpg"
                        height={500}
                        width={500}
                        alt="Patient Image"
                    />
                    <div className="flex flex-wrap justify-center mt-2 gap-3">
                        <Image
                            src="/patient1.jpg"
                            alt="Patient Image"
                            height={200}
                            width={200}
                            className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                        />
                        <Image
                            src="/patient1.jpg"
                            alt="Patient Image"
                            height={200}
                            width={200}
                            className="hover:border-green-400 hover:border-4 hover:rounded-md rounded-md object-cover max-w-[100px] md:max-w-[200px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
