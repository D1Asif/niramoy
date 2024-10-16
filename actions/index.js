"use server"

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getPatients = async (queryString) => {
    const response = await fetch(`${process.env.API_BASE_URL}/patients?${queryString}`, { cache: 'no-store' });
    const data = await response.json();

    return data;
}

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
    const actionType = formData.get("actionType");
    const dataEntryUserId = formData.get("dataEntryUserId");

    let success = true;

    try {
        let uploadedImageData;

        if (nid?.size) {
            uploadedImageData = await imageUpload(nid);
        }

        let updateBody = {
            address,
            blood_group: bloodGroup,
            contact_number: contactNumber,
            institution,
            institution_address: institutionalAddress,
            name,
            occupation,
            updated_by: "User"
        }

        if (uploadedImageData) {
            updateBody = {
                ...updateBody,
                nid_image: uploadedImageData.url
            }
        }

        const fetchUrl = actionType === "Update" ? `${process.env.API_BASE_URL}/data-entry-users/${dataEntryUserId}` : `${process.env.API_BASE_URL}/data-entry-users/`

        const res = await fetch(fetchUrl, {
            method: actionType === "Update" ? "PUT" : "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.user?.authToken}`
            },
            body: JSON.stringify(
                actionType === "Update" ? (
                    updateBody
                ) : (
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
                        occupation
                    }
                )

            )
        });

        const resData = await res.json();

        if (res.ok) {
            console.log("Success");
        } else {
            throw new Error("Data entry user create/update failed!")
        }

    } catch (err) {
        success = false;
        console.log(err);
        redirect("/account?toast_message=error")
    }

    if (success) {
        redirect("/account?toast_message=success")
    } else {
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
    const crisis = formData.get("crisis");
    const bloodGroup = formData.get("bloodGroup");
    const dateAndTimeOfInjury = formData.get("dateAndTimeOfInjury");
    const dateAndTimeOfAdmission = formData.get("dateAndTimeOfAdmission");
    const photosOfInjury = formData.getAll("photosOfInjury"); // This would return the File object or an array of File objects depending on how it's handled.
    const documents = formData.getAll("documents"); // Same as above.
    const hospital = formData.get("hospital");
    const affectedBodyParts = formData.get("affectedBodyParts");
    const requiredFundType = formData.get("requiredFundType");
    const requiredFundAmount = formData.get("requiredFundAmount");
    const raisedFundAmount = formData.get("raisedFundAmount");
    const previousInjuryPhotos = formData.get("previousInjuryPhotos");
    const previousDocumentPhotos = formData.get("previousDocumentPhotos");
    const actionType = formData.get("actionType");
    const patientId = formData.get("patientId");

    const createPatientInDB = async () => {
        try {
            const session = await auth();

            let photoUrlArrayOfInjury = [];

            for (const file of photosOfInjury) {
                if (file.size) {
                    const uploadedImageData = await imageUpload(file);
                    photoUrlArrayOfInjury.push(uploadedImageData?.url);
                }
            }

            if (!!previousInjuryPhotos) {
                const previousInjuryUrls = previousInjuryPhotos.split(" ")
                photoUrlArrayOfInjury = [...photoUrlArrayOfInjury, ...previousInjuryUrls]
            }

            let photoUrlArrayOfDocuments = [];

            for (const file of documents) {
                if (file.size) {
                    const uploadedImageData = await imageUpload(file);
                    photoUrlArrayOfDocuments.push(uploadedImageData?.url);
                }
            }

            if (!!previousDocumentPhotos) {
                const previousDocumentUrls = previousDocumentPhotos.split(" ")
                photoUrlArrayOfDocuments = [...photoUrlArrayOfDocuments, ...previousDocumentUrls]
            }

            const updateBody = {
                admission_datetime: dateAndTimeOfAdmission ? dateAndTimeOfAdmission : null,
                affected_body_parts: affectedBodyParts?.split(","),
                age: parseInt(age),
                blood_group: bloodGroup,
                contact_number: contactNumber,
                crysis_type: crisis,
                current_address: hospital,
                current_status: injuryCurrentStatus,
                description: additionalInfo,
                documents: photoUrlArrayOfDocuments,
                gender,
                home_address: address,
                injury_datetime: dateAndTimeOfInjury ? dateAndTimeOfInjury : null,
                injury_details: injuryDetails,
                injury_photos: photoUrlArrayOfInjury,
                injury_type: injuryType,
                last_update: new Date(),
                medical_details: injuryDetails,
                name,
                raised_fund_amount: parseInt(raisedFundAmount),
                required_fund: requiredFundType,
                required_fund_amount: parseInt(requiredFundAmount),
                updated_by: session?.user?.username
            }

            const body = {
                admission_datetime: dateAndTimeOfAdmission ? dateAndTimeOfAdmission : null,
                affected_body_parts: affectedBodyParts?.split(","),
                age: parseInt(age),
                blood_group: bloodGroup,
                contact_number: contactNumber,
                created_by: session?.user?.username,
                crysis_type: crisis,
                current_address: hospital,
                current_status: injuryCurrentStatus,
                data_entry_personnel: session?.user?.username,
                description: additionalInfo,
                documents: photoUrlArrayOfDocuments,
                gender,
                home_address: address,
                injury_datetime: dateAndTimeOfInjury ? dateAndTimeOfInjury : null,
                injury_details: injuryDetails,
                injury_photos: photoUrlArrayOfInjury,
                injury_type: injuryType,
                last_update: new Date(),
                medical_details: injuryDetails,
                name,
                raised_fund_amount: parseInt(raisedFundAmount),
                required_fund: requiredFundType,
                required_fund_amount: parseInt(requiredFundAmount),
                updated_by: null
            }

            const fetchUrl = actionType === "Update" ? `${process.env.API_BASE_URL}/patients/${patientId}` : `${process.env.API_BASE_URL}/patients/`

            const res = await fetch(fetchUrl, {
                method: actionType === "Update" ? "PUT" : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.authToken}`
                },
                body: JSON.stringify(
                    actionType === "Update" ? updateBody : body
                )
            });

            const resData = await res.json();

            if (res.ok) {
                revalidatePath("/")
                return resData;
            } else {
                throw new Error("Data entry user create/update failed!")
            }

        } catch (err) {
            console.log(err);
            redirect(actionType === "Update" ? `/patients/${patientId}/edit?toast_message=error` : `/create-new-patient?toast_message=error`);
        }
    }

    const newPatientData = await createPatientInDB();

    if (newPatientData?.id) {
        redirect(`/patients/${newPatientData?.id}`);
    }
}


export const deletePatientAction = async (patientId) => {
    const session = await auth();
    const fetchUrl = `${process.env.API_BASE_URL}/patients/${patientId}`;

    let success = "success";

    try {
        const res = await fetch(fetchUrl, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.user?.authToken}`
            }
        });

        if (res.status === 204) {
            revalidatePath("/");
            return "success";
        }
    } catch (err) {
        console.log(err);
        return "error"
    }

};