"use server"

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const userSignUp = async (userData) => {
    const res = await fetch(`${process.env.API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...userData
        })
    });

    const result = await res.json();

    return {
        status: res.status,
        result
    }
}

export const imageUpload = async (image) => {
    const data = new FormData();
    data.append("image", image);

    const res = await fetch(`${process.env.IMGBB_API_UPLOAD_URL}?key=${process.env.IMGBB_API_KEY}`, {
        method: "POST",
        body: data
    });

    const responseData = await res.json();
    console.log(responseData);

    if (res.ok) {
        return responseData.data;
    } else {
        throw new Error("Image could not be uploaded")
    }
}

export const dataEntryUserInfoFormAction = async (formData) => {
    const session = await auth();

    const name = formData.get("name");
    const contactNumber = formData.get("contactNumber");
    const address = formData.get("address");
    const bloodGroup = formData.get("bloodGroup");
    const occupation = formData.get("occupation");
    const institution = formData.get("institution");
    const institutionalAddress = formData.get("institutionalAddress");
    const nid = formData.get("nid");

    try {
        const uploadedImageData = await imageUpload(nid);

        const res = await fetch(`${process.env.API_BASE_URL}/data-entry-users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.user?.authToken}`
            },
            body: JSON.stringify(
                {
                    address,
                    blood_group: bloodGroup,
                    contact_number: contactNumber,
                    created_by: "User",
                    email: session?.user?.email,
                    institution,
                    institution_address: institutionalAddress,
                    name,
                    nid_image: uploadedImageData.url,
                    occupation,
                    updated_by: "User"
                }
            )
        });

        const resData = await res.json();
        console.log(resData);

        if (res.ok) {
            console.log("Success");
            redirect("/account");
        } else {
            throw new Error("Data entry user create/update failed!")
        }

    } catch (err) {
        console.log(err);
        redirect("/account?toast_message=error")
    }
}

export const createPatientAction = async (formData) => {
    const name = formData.get("name");
    const age = formData.get("age");
    const address = formData.get("address");
    const gender = formData.get("gender");
    const contactNumber = formData.get("contactNumber");
    const additionalInfo = formData.get("additionalInfo");
    const injuryCurrentStatus = formData.get("injuryCurrentStatus");
    const injuryType = formData.get("injuryType");
    const injuryDetails = formData.get("injuryDetails");
    const bloodGroup = formData.get("bloodGroup");
    const dateAndTimeOfInjury = formData.get("dateAndTimeOfInjury");
    const dateAndTimeOfAdmission = formData.get("dateAndTimeOfAdmission");
    const photosOfInjury = formData.getAll("photosOfInjury"); // This would return the File object or an array of File objects depending on how it's handled.
    const documents = formData.getAll("documents"); // Same as above.
    const hospital = formData.get("hospital");
    const affectedBodyParts = formData.get("affectedBodyParts");
    const requiredFundType = formData.get("requiredFundType");
    const raisedFundAmount = formData.get("raisedFundAmount");

    const createPatientInDB = async () => {
        try {
            const session = await auth();

            const photoUrlArrayOfInjury = [];

            for (const file of photosOfInjury) {
                if (file.size) {
                    const uploadedImageData = await imageUpload(file);
                    photoUrlArrayOfInjury.push(uploadedImageData?.url);
                }
            }

            const photoUrlArrayOfDocuments = []

            for (const file of documents) {
                if (file.size) {
                    const uploadedImageData = await imageUpload(file);
                    photoUrlArrayOfDocuments.push(uploadedImageData?.url);
                }
            }

            const res = await fetch(`${process.env.API_BASE_URL}/patients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.authToken}`
                },
                body: JSON.stringify(
                    {
                        admission_datetime: dateAndTimeOfAdmission,
                        affected_body_parts: affectedBodyParts.split(","),
                        age: parseInt(age),
                        blood_group: bloodGroup,
                        contact_number: contactNumber,
                        created_by: session?.user?.username,
                        current_address: hospital,
                        current_status: injuryCurrentStatus,
                        data_entry_personnel: session?.user?.username,
                        description: additionalInfo,
                        documents: photoUrlArrayOfDocuments,
                        gender,
                        home_address: address,
                        injury_datetime: dateAndTimeOfInjury,
                        injury_details: injuryDetails,
                        injury_photos: photoUrlArrayOfInjury,
                        injury_type: injuryType,
                        medical_details: injuryDetails,
                        name,
                        raised_fund_amount: parseInt(raisedFundAmount),
                        required_fund: requiredFundType,
                        updated_by: null
                    }
                )
            });

            const resData = await res.json();
            console.log(resData);

            if (res.ok) {
                revalidatePath("/")
                return resData;
            } else {
                throw new Error("Data entry user create/update failed!")
            }

        } catch (err) {
            console.log(err);
            redirect(`/create-new-patient?toast_message=error`);
        }
    }

    const newPatientData = await createPatientInDB();

    if (newPatientData?.id) {
        redirect(`/patients/${newPatientData?.id}`);
    }
}