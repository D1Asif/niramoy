import { z } from "zod";
import FormField from "../auth/FormField";
import { useState } from "react";


export default function DataEntryUserInfoForm({ setIsEditing }) {
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsEditing(false);

        const formData = new FormData(e.currentTarget);

        const username = formData.get("username");
        const password = formData.get("password");

        try {

        } catch (err) {
            setError({
                ...error,
                general: err.message
            })
        }
    }
    return (
        <form action="#" method="post" autoComplete="off" onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4"
        >
            {error.general && <p className="text-sm text-red-500 text-center py-1">{error.general}</p>}
            <div>
                <p className="text-gray-400">
                    Full Name
                    <span className="text-red-600"> *</span>
                </p>
                <FormField
                    type="text"
                    name="name"
                    id="name"
                    // placeholder="youremail@domain.com"
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
                    // placeholder="youremail@domain.com"
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
                    // placeholder="youremail@domain.com"
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
                    // placeholder="youremail@domain.com"
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
                    // placeholder="youremail@domain.com"
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
                    // placeholder="youremail@domain.com"
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
                    handleChange={handleChange}
                    error={error.nid}
                />
            </div>



            <div className="mt-4 mb-6">
                <button
                    type="submit"
                    disabled={isError}
                    className="block w-full py-2 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                >
                    Create
                </button>
            </div>
        </form>
    )
}
