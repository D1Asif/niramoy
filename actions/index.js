"use server"

import { auth } from "@/auth";
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