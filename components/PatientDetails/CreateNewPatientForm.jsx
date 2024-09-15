"use client"

import { useState } from "react";
import FormField from "../auth/FormField";
import { z } from "zod";
import { createPatientAction } from "@/actions";
import MultiSelector from "../common/MultiSelector";
import ImageUpdateGallery from "../common/ImageUpdateGallery";

export default function CreateNewPatientForm({ patient }) {

    const [injuryPhotos, setInjuryPhotos] = useState(patient?.injury_photos);
    const [documentPhotos, setDocumentPhotos] = useState(patient?.documents);

    const [error, setError] = useState({
        name: "",
        age: "",
        address: "",
        gender: "",
        contactNumber: "",
        additionalInfo: "",
        injuryCurrentStatus: "",
        injuryType: "",
        injuryDetails: "",
        crisis: "",
        bloodGroup: "",
        dateAndTimeOfAdmission: "",
        dateAndTimeOfInjury: "",
        photosOfInjury: "",
        hospital: "",
        affectedBodyParts: "",
        documents: "",
        requiredFundType: "",
        requiredFundAmount: "",
        raisedFundAmount: ""
    });

    const [tags, setTags] = useState([]);

    const isError = Object.values(error).some(Boolean);

    const formSchema = z.object({
        name: z.string().min(2).max(50),
        age: z.string().regex(/^\d+$/, 'Age must be a positive integer'),
        address: z.string(),
        gender: z.enum(['Male', 'Female', 'Other'], 'Gender must be one of Male, Female, or Other'),
        contactNumber: z.string().regex(/^\d{11}$/, "Contact number must be 11 digits long"), // Assuming 11-digit number
        additionalInfo: z.string().optional(),
        injuryCurrentStatus: z.string(),
        injuryType: z.string(),
        injuryDetails: z.string(),
        crisis: z.string(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown']),
        dateAndTimeOfAdmission: z.string().date("Must be in YYYY-MM-DD format"),
        dateAndTimeOfInjury: z.string().date("Must be in YYYY-MM-DD format"),
        // photosOfInjury: z.string(),
        hospital: z.string(),
        affectedBodyParts: z.string(),
        // documents: z.array(z.string()),
        requiredFundType: z.string(),
        requiredFundAmount: z.string().regex(/^\d+$/, 'Amount must be a positive integer'),
        raisedFundAmount: z.string().regex(/^\d+$/, 'Amount must be a positive integer'),
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
                ...error
            })
        }
    }

    return (
        <div className=" text-slate-600 dark:text-slate-300 rounded-lg p-6 max-w-4xl mx-auto my-8 border border-black/10 dark:border-white/10">
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-primary">
                    Patient Info
                </h3>
            </div>
            <form action={createPatientAction} autoComplete="off">
                {error.general && <p className="text-sm text-red-500 text-center pt-3">{error.general}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <p className="text-gray-400">
                            Name
                            {/* {<span className="text-red-600"> *</span>} */}
                        </p>
                        <FormField
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={patient?.name}
                            // required={true}
                            handleChange={handleChange}
                            error={error.name}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Age
                            {/* <span className="text-red-600"> *</span> */}
                        </p>
                        <FormField
                            type="text"
                            name="age"
                            id="age"
                            defaultValue={patient?.age}
                            // required={true}
                            handleChange={handleChange}
                            error={error.age}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Address (Patient&apos;s home)
                        </p>
                        <FormField
                            type="text"
                            name="address"
                            id="address"
                            defaultValue={patient?.age}
                            handleChange={handleChange}
                            error={error.address}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Gender
                            {/* <span className="text-red-600"> *</span> */}
                        </p>
                        <FormField
                            type="select"
                            name="gender"
                            id="gender"
                            defaultValue={patient?.gender}
                            // required={true}
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
                            defaultValue={patient?.contact_number}
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
                            defaultValue={patient?.description}
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
                            defaultValue={patient?.current_status}
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
                            Injury type
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="injuryType"
                            id="injuryType"
                            required={true}
                            options={[
                                "Major",
                                "Minor",
                                "Critical"
                            ]}
                            defaultValue={patient?.injury_type}
                            handleChange={handleChange}
                            error={error.injuryType}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Injury/medical details
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="text"
                            name="injuryDetails"
                            id="injuryDetails"
                            required={true}
                            defaultValue={patient?.medical_details}
                            handleChange={handleChange}
                            error={error.injuryDetails}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Patient of
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="crisis"
                            id="crisis"
                            required={true}
                            options={[
                                "Movement",
                                "Flood",
                            ]}
                            defaultValue={patient?.crysis_type}
                            handleChange={handleChange}
                            error={error.crisis}
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
                                "O-",
                                "Unknown"
                            ]}
                            defaultValue={patient?.blood_group}
                            handleChange={handleChange}
                            error={error.bloodGroup}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Date of Injury (YYYY-MM-DD)
                            {/* <span className="text-red-600"> *</span> */}
                        </p>
                        <FormField
                            type="text"
                            name="dateAndTimeOfInjury"
                            id="dateAndTimeOfInjury"
                            defaultValue={patient?.injury_datetime?.split("T")[0]}
                            // required={true}
                            handleChange={handleChange}
                            error={error.dateAndTimeOfInjury}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Date of Admission (YYYY-MM-DD)
                            {/* <span className="text-red-600"> *</span> */}
                        </p>
                        <FormField
                            type="text"
                            name="dateAndTimeOfAdmission"
                            id="dateAndTimeOfAdmission"
                            defaultValue={patient?.admission_datetime?.split("T")[0]}
                            // required={true}
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
                            multiple={true}
                            name="photosOfInjury"
                            id="photosOfInjury"
                            handleChange={handleChange}
                            error={error.photosOfInjury}
                        />
                        {!!injuryPhotos?.length && <ImageUpdateGallery images={injuryPhotos} setImagesArray={setInjuryPhotos} />}
                        <input
                            type="text"
                            name="previousInjuryPhotos"
                            id="previousInjuryPhotos"
                            value={!!injuryPhotos?.length ? injuryPhotos?.join(" "): null}
                            hidden
                        />
                        <input
                            type="text"
                            name="patientId"
                            id="patientId"
                            value={patient?.id}
                            hidden
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Current address (Hospital)
                            {/* <span className="text-red-600"> *</span> */}
                        </p>
                        <FormField
                            type="text"
                            name="hospital"
                            id="hospital"
                            // required={true}
                            defaultValue={patient?.current_address}
                            handleChange={handleChange}
                            error={error.hospital}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Affected body parts
                            {/* <span className="text-red-600"> *</span> */}
                        </p>
                        <input
                            type="text"
                            id="affectedBodyParts"
                            name="affectedBodyParts"
                            hidden
                            defaultValue={patient?.affected_body_parts}
                            value={tags.join(",")}
                            readOnly
                        />
                        <MultiSelector setterFunction={setTags} initialValue={patient?.affected_body_parts} />
                        {/* <FormField
                            type="text"
                            name="affectedBodyParts"
                            id="affectedBodyParts"
                            required={true}
                            handleChange={handleChange}
                            error={error.affectedBodyParts}
                        /> */}
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Documents (Medical proof, Prescription etc)
                        </p>
                        <FormField
                            type="file"
                            multiple={true}
                            name="documents"
                            id="documents"
                            handleChange={handleChange}
                            error={error.documents}
                        />
                        {!!documentPhotos?.length && <ImageUpdateGallery images={documentPhotos} setImagesArray={setDocumentPhotos} />}
                        <input
                            type="text"
                            name="previousDocumentPhotos"
                            id="previousDocumentPhotos"
                            value={!!documentPhotos?.length ? documentPhotos?.join(" "): null}
                            hidden
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Fund requirement type
                            <span className="text-red-600"> *</span>
                        </p>
                        <FormField
                            type="select"
                            name="requiredFundType"
                            id="requiredFundType"
                            required={true}
                            defaultValue={patient?.required_fund}
                            options={[
                                "Urgent",
                                "Required",
                                "Not Required"
                            ]}
                            handleChange={handleChange}
                            error={error.requiredFundType}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Required fund amount
                        </p>
                        <FormField
                            type="text"
                            name="requiredFundAmount"
                            id="requiredFundAmount"
                            defaultValue={patient?.required_fund_amount}
                            handleChange={handleChange}
                            error={error.requiredFundAmount}
                        />
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Raised fund amount
                        </p>
                        <FormField
                            type="text"
                            name="raisedFundAmount"
                            id="raisedFundAmount"
                            defaultValue={patient?.raised_fund_amount}
                            handleChange={handleChange}
                            error={error.raisedFundAmount}
                        />
                    </div>
                    <input 
                        type="text"
                        name="actionType"
                        id="actionType"
                        value={!!patient ? "Update": null} 
                        hidden
                    />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        disabled={isError}
                        className="block w-full py-2 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                    >
                        {!!patient ? "Update": "Create"}
                    </button>
                </div>
            </form>
        </div>

    )
}
