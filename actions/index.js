"use server"

export const userSignUp = async (userData) => {
    const res = await fetch(`http://138.2.66.110:8212/signup`, {
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