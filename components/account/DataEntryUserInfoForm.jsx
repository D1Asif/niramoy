import { z } from "zod";
import FormField from "../auth/FormField";
import { useState } from "react";
import { dataEntryUserInfoFormAction, imageUpload } from "@/actions";
import Image from "next/image";


export default function DataEntryUserInfoForm({ dataEntryUser }) {
    const [error, setError] = useState({
        name: "",
        contactNumber: "",
        address: "",
        bloodGroup: "",
        occupation: "",
        institution: "",
        institutionalAddress: "",
        nid: "",
        general: ""
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
        const { name, value } = e.target;

        try {
            const fieldSchema = formSchema.pick({ [name]: true });
            const res = fieldSchema.safeParse({ [name]: value });
            if (res.success === true) {
                setError({
                    ...error,
                    [name]: null
                })
            } else {
                const resError = JSON.parse(res.error.message)
                setError({
                    ...error,
                    [name]: resError[0].message
                })
            }
        } catch (err) {
            console.log(err);
            setError({
                ...error,
                username: err.message
            })
        }
    }

    return (
        <form action={dataEntryUserInfoFormAction} autoComplete="off">
            {error.general && <p className="text-sm text-red-500 text-center pt-3">{error.general}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div>
                    <p className="text-gray-400">
                        Full Name
                        <span className="text-red-600"> *</span>
                    </p>
                    <FormField
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={dataEntryUser?.name}
                        required={true}
                        handleChange={handleChange}
                        error={error.name}
                    />
                </div>
                <div>
                    <p className="text-gray-400">
                        Contact Number
                        <span className="text-red-600"> *</span>
                    </p>
                    <FormField
                        type="text"
                        name="contactNumber"
                        id="contactNumber"
                        defaultValue={dataEntryUser?.contact_number}
                        required={true}
                        handleChange={handleChange}
                        error={error.contactNumber}
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
                        defaultValue={dataEntryUser?.address}
                        required={true}
                        handleChange={handleChange}
                        error={error.address}
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
                        defaultValue={dataEntryUser?.blood_group}
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
                        Occupation
                        <span className="text-red-600"> *</span>
                    </p>
                    <FormField
                        type="text"
                        name="occupation"
                        id="occupation"
                        defaultValue={dataEntryUser?.occupation}
                        required={true}
                        handleChange={handleChange}
                        error={error.occupation}
                    />
                </div>
                <div>
                    <p className="text-gray-400">
                        Institution
                        <span className="text-red-600"> *</span>
                    </p>
                    <FormField
                        type="text"
                        name="institution"
                        id="institution"
                        defaultValue={dataEntryUser?.institution}
                        required={true}
                        handleChange={handleChange}
                        error={error.institution}
                    />
                </div>
                <div>
                    <p className="text-gray-400">
                        Institutional Address
                        <span className="text-red-600"> *</span>
                    </p>
                    <FormField
                        type="text"
                        name="institutionalAddress"
                        id="institutionalAddress"
                        defaultValue={dataEntryUser?.institution_address}
                        required={true}
                        handleChange={handleChange}
                        error={error.institutionalAddress}
                    />
                </div>
                <div>
                    <p className="text-gray-400">
                        NID Image
                        <span className="text-red-600"> *</span>
                    </p>
                    
                    <FormField
                        type="file"
                        name="nid"
                        id="nid"
                        // placeholder="youremail@domain.com"
                        required={dataEntryUser ? false : true}
                        handleChange={handleChange}
                        error={error.nid}
                    />
                    {
                        dataEntryUser?.nid_image && (
                            <Image
                                src={dataEntryUser?.nid_image}
                                alt="NID Image"
                                height={400}
                                width={400}
                                className={`mt-1 border-4 border-gray-300/50 rounded-md object-cover max-w-[400px]`}
                            />
                        )
                    }
                </div>
            </div>
            <input 
                type="text"
                name="actionType" 
                id="actionType"
                value={dataEntryUser ? "Update": "Create"}
                hidden 
            />
            <input 
                type="text"
                name="dataEntryUserId" 
                id="dataEntryUserId"
                value={dataEntryUser?.id}
                hidden 
            />
            <div className="mt-4 mb-6">
                <button
                    type="submit"
                    disabled={isError}
                    className="block w-full py-2 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                >
                    {dataEntryUser ? "Update": "Create"}
                </button>
            </div>
        </form>
    )
}
