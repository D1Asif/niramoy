"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import DataEntryUserInfoForm from "./DataEntryUserInfoForm";
import { FaEdit } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function DataEntryUserProfileInfo({ dataEntryUser }) {
    const [isEditing, setIsEditing] = useState(false);

    const searchParams = useSearchParams();
    const toastMessage = searchParams.get('toast_message');

    const router = useRouter();

    useEffect(() => {
        if (toastMessage === "success") {
            toast.success("Success!");
            setIsEditing(false);
            router.replace("/account");
        }
        if (toastMessage === "error") {
            toast.error("Error!");
            router.replace("/account");
        }
    }, [toastMessage, router]);

    

    if (!dataEntryUser && !isEditing) {
        return (
            <>
                <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                    <h3 className="text-xl font-semibold text-primary">Data Entry User Profile</h3>
                </div>
                <div className="py-6">
                    You need to register as a data entry user to create patient entry. &nbsp;
                    <span className="underline cursor-pointer hover:text-primary" onClick={() => setIsEditing(true)}>Register now</span>
                </div>
            </>
        )
    }

    return (
        <>
            {/* My Profile Section */}
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-primary">Data Entry User Profile</h3>
                <button className="bg-transparent text-primary hover:text-primary" onClick={() => setIsEditing(true)}>
                    {!isEditing && <FaEdit />}
                </button>
            </div>

            {/* Profile Details */}
            {
                !isEditing ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                        <div>
                            <p className="text-gray-400">Full Name</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.name}
                            </h4>
                        </div>
                        {/* <div>
                            <p className="text-gray-400">Email</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.email}
                            </h4>
                        </div> */}
                        <div>
                            <p className="text-gray-400">ID</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.id}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">Contact Number</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.contact_number}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">Address</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.address}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">Occupation</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.occupation}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">Institution</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.institution}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">Institution Address in Details</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser?.institution_address}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">Blood group</p>
                            <h4 className="text-lg font-medium">
                                {dataEntryUser.blood_group}
                            </h4>
                        </div>
                        <div>
                            <p className="text-gray-400">NID/Student ID</p>
                            <Image
                                src={dataEntryUser?.nid_image}
                                alt="NID Image"
                                height={400}
                                width={400}
                                className={`mt-1 border-4 border-gray-300/50 rounded-md object-cover max-w-[400px]`}
                            />
                        </div>
                    </div>
                ) : (
                    <DataEntryUserInfoForm setIsEditing={setIsEditing} dataEntryUser={dataEntryUser} />
                )
            }

            <br />
        </>
    )
}
