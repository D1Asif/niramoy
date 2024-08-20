import Link from "next/link";
import PatientListTable from "./PatientListTable";
import Image from "next/image";


export default function ProfileCard() {
    return (
        <div className=" text-slate-600 dark:text-slate-300 rounded-lg p-6 max-w-4xl mx-auto my-8 border border-black/10 dark:border-white/10">
            {/* My Profile Section */}
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-primary">My Profile</h3>
                <button className="bg-transparent text-primary hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_3615_637)">
                            <path
                                d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                stroke="url(#paint0_linear_3615_637)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                stroke="url(#paint1_linear_3615_637)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 5L19 8"
                                stroke="url(#paint2_linear_3615_637)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_3615_637" x1="6.56139" y1="5.00744" x2="17.7546" y2="6.50865" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00d991" />
                                <stop offset="1" stopColor="#00d991" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3615_637" x1="11.3644" y1="1.16058" x2="21.6966" y2="2.54632" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00d991" />
                                <stop offset="1" stopColor="#00d991" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3615_637" x1="16.5911" y1="4.54018" x2="19.1741" y2="4.88661" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00d991" />
                                <stop offset="1" stopColor="#00d991" />
                            </linearGradient>
                            <clipPath id="clip0_3615_637">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div>
                    <p className="text-gray-400">Full Name</p>
                    <h4 className="text-lg font-medium">Dewan Asifur Rahman</h4>
                </div>
                <div>
                    <p className="text-gray-400">Email</p>
                    <h4 className="text-lg font-medium">dasifrahman@gmail.com</h4>
                </div>
                <div>
                    <p className="text-gray-400">ID</p>
                    <h4 className="text-lg font-medium">WEB3-0551</h4>
                </div>
                <div>
                    <p className="text-gray-400">Contact Number</p>
                    <h4 className="text-lg font-medium">01311933447</h4>
                </div>
                <div>
                    <p className="text-gray-400">Address</p>
                    <h4 className="text-lg font-medium">Mirpur, Dhaka</h4>
                </div>
                <div>
                    <p className="text-gray-400">Occupation</p>
                    <h4 className="text-lg font-medium">Student</h4>
                </div>
                <div>
                    <p className="text-gray-400">Institution</p>
                    <h4 className="text-lg font-medium">Dhaka Medical College</h4>
                </div>
                <div>
                    <p className="text-gray-400">Institution Address in Details</p>
                    <h4 className="text-lg font-medium">Dhaka</h4>
                </div>
                <div>
                    <p className="text-gray-400">Blood group</p>
                    <h4 className="text-lg font-medium">O+</h4>
                </div>
                <div>
                    <p className="text-gray-400">NID</p>
                    <Image
                        src="/patient1.jpg"
                        alt="NID Image"
                        height={400}
                        width={400}
                        className={`mt-1 border-4 border-gray-300/50 rounded-md object-cover max-w-[400px]`}
                    />
                </div>
            </div>

            {/* Device Activity Section */}
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

            <PatientListTable />
        </div>
    )
}
