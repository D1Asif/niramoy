"use server"

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