"use client"

import { useState } from "react";
import FormField from "../auth/FormField";
import { z } from "zod";

export default function CreateNewPatientForm() {
    const [error, setError] = useState({
        name: "",
        age: "",
        address: "",
        gender: "",
        contactNumber: "",
        additionalInfo: "",
        injuryCurrentStatus: "",
        injuryDetails: "",
        bloodGroup: "",
        dateAndTimeOfAdmission: "",
        dateAndTimeOfInjury: "",
        photosOfInjury: "",
        hospital: "",
        affectedBodyParts: "",
        documents: "",
        requiredFundType: "",
        // requiredFundAmount: "",
        raisedFundAmount: ""
    });

    const isError = !!(error.username || error.password);

    const formSchema = z.object({
        name: z.string().min(1, { message: "Name is required" }),
        contactNumber: z.string()
            .regex(/^[0-9]+$/, { message: "Contact number must contain only digits (0-9)" })
            .min(11, { message: "Contact number must be 11 digits" })
            .max(11, { message: "Contact number must be 11 digits" }),
        address: z.string().min(1, { message: "Address is required" }),
        bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], { message: "Invalid blood group" }),
        occupation: z.string().min(1, { message: "Occupation is required" }),
        institution: z.string().min(1, { message: "Institution is required" }),
        institutionalAddress: z.string().min(1, { message: "Institutional address is required" }),
        nid: z.string().min(1, { message: "NID is required" }),
    })

    const handleChange = (e) => {
        // const { name, value } = e.target;

        // try {
        //     const fieldSchema = formSchema.pick({ [name]: true });
        //     const res = fieldSchema.safeParse({ [name]: value });
        //     if (res.success === true) {
        //         setError({
        //             ...error,
        //             [name]: null
        //         })
        //     } else {
        //         const resError = JSON.parse(res.error.message)
        //         setError({
        //             ...error,
        //             [name]: resError[0].message
        //         })
        //     }
        // } catch (err) {
        //     console.log(err);
        //     setError({
        //         ...error,
        //         username: err.message
        //     })
        // }
    }

    return (
        <div className=" text-slate-600 dark:text-slate-300 rounded-lg p-6 max-w-4xl mx-auto my-8 border border-black/10 dark:border-white/10">
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-primary">
                    Patient Info
                </h3>
            </div>
            <form autoComplete="off">
                {error.general && <p className="text-sm text-red-500 text-center pt-3">{error.general}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <p className="text-gray-400">
                            Name
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="name"
                            id="name"
                            required={true}
                            handleChange={handleChange}
                            error={error.name}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Age
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="age"
                            id="age"
                            required={true}
                            handleChange={handleChange}
                            error={error.age}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Address
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="address"
                            id="address"
                            handleChange={handleChange}
                            error={error.address}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Gender
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="gender"
                            id="gender"
                            required={true}
                            options={[
                                "Male",
                                "Female",
                                "Other"
                            ]}
                            handleChange={handleChange}
                            error={error.gender}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Contact Number
                        </p>
                        <FormField
                            type="text"
                            name="contactNumber"
                            id="contactNumber"
                            handleChange={handleChange}
                            error={error.contactNumber}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Additional Info
                        </p>
                        <FormField
                            type="text"
                            name="additionalInfo"
                            id="additionalInfo"
                            handleChange={handleChange}
                            error={error.additionalInfo}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Current Status
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="injuryCurrentStatus"
                            id="injuryCurrentStatus"
                            required={true}
                            options={[
                                "Injured",
                                "Healed"
                            ]}
                            handleChange={handleChange}
                            error={error.injuryCurrentStatus}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Injury details
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="injuryDetails"
                            id="injuryDetails"
                            required={true}
                            handleChange={handleChange}
                            error={error.injuryDetails}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Blood Group
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="bloodGroup"
                            id="bloodGroup"
                            required={true}
                            options={[
                                "A+",
                                "A-",
                                "B+",
                                "B-",
                                "AB+",
                                "AB-",
                                "O+",
                                "O-"
                            ]}
                            handleChange={handleChange}
                            error={error.bloodGroup}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Date and Time of Injury
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="dateAndTimeOfInjury"
                            id="dateAndTimeOfInjury"
                            required={true}
                            handleChange={handleChange}
                            error={error.dateAndTimeOfInjury}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Date and Time of Admission
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="dateAndTimeOfAdmission"
                            id="dateAndTimeOfAdmission"
                            required={true}
                            handleChange={handleChange}
                            error={error.dateAndTimeOfAdmission}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Photos of Injury Status
                        </p>
                        <FormField
                            type="file"
                            name="photosOfInjury"
                            id="photosOfInjury"
                            handleChange={handleChange}
                            error={error.photosOfInjury}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Current address (Hospital)
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="hospital"
                            id="hospital"
                            required={true}
                            handleChange={handleChange}
                            error={error.hospital}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Affected body parts
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="affectedBodyParts"
                            id="affectedBodyParts"
                            required={true}
                            handleChange={handleChange}
                            error={error.affectedBodyParts}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Documents (Medical proof, Prescription etc)
                        </p>
                        <FormField
                            type="file"
                            name="documents"
                            id="documents"
                            handleChange={handleChange}
                            error={error.documents}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Required fund type
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="requiredFundType"
                            id="requiredFundType"
                            required={true}
                            options={[
                                "Urgent",
                                "Required",
                                "Not Required"
                            ]}
                            handleChange={handleChange}
                            error={error.requiredFundType}
                        />
                    </div>
                    {/* <div>
                        <p className="text-gray-400">
                            Required fund amount
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="requiredFundAmount"
                            id="requiredFundAmount"
                            handleChange={handleChange}
                            error={error.requiredFundAmount}
                        />
                    </div> */}
                    <div>
                        <p className="text-gray-400">
                            Raised fund amount
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="raisedFundAmount"
                            id="raisedFundAmount"
                            handleChange={handleChange}
                            error={error.raisedFundAmount}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        disabled={isError}
                        className="block w-full py-2 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>

    )
}
