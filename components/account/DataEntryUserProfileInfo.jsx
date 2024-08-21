"use client"

import Image from "next/image";
import { useState } from "react";
import DataEntryUserInfoForm from "./DataEntryUserInfoForm";
import { FaCheck, FaEdit } from "react-icons/fa";

export default function DataEntryUserProfileInfo() {
    const [isEditing, setIsEditing] = useState(true);

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
                ) : (
                    <DataEntryUserInfoForm setIsEditing={setIsEditing} />
                )
            }

            <br />
        </>
    )
}
