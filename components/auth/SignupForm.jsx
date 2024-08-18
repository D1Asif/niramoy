"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import FormField from "./FormField";
import { useRouter } from "next/navigation";


export default function SignupForm() {
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        general: "",
        agreement: ""
    });
    const router = useRouter();

    const isError = !!(error.name || error.email || error.password || error.confirm);

    const formSchema = z.object({
        name: z.string().trim().min(1, "Name is required"),
        email: z.string().email('Invalid email address'),
        password: z.string().min(8, "Password must be 8 characters long"),
        confirm: z.string().min(8, "Password must be 8 characters long")
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
                email: err.message
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError({
            name: "",
            email: "",
            password: "",
            confirm: "",
            general: "",
            agreement: ""
        })

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm");
        const agreement = formData.get("agreement") === "on";

        let errorOccurred = false;

        if (agreement !== true) {
            errorOccurred = true;
            setError({
                ...error,
                agreement: "You must agree to terms & conditions to proceed"
            })
        }

        if (password !== confirmPassword) {
            errorOccurred = true;
            setError({
                ...error,
                confirm: "Password and confirm password do not match"
            })
        }

        if (errorOccurred) {
            return;
        }

        try {
            const res = await fetch(`/api/auth/register`, {
                method: "POST",
                "Content-Type": "application/json",
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            if (res.status === 201) {
                router.push("/login");
            } else {
                throw new Error(`Error: ${res.status}`);
            }
        } catch (err) {
            console.log(err);
            setError({
                name: "",
                email: "",
                password: "",
                confirm: "",
                general: "",
                agreement: "",
                general: err.message
            })
        }
    }

    return (
        <form action="#" method="post" autoComplete="off" onSubmit={handleSubmit}
            className="w-full md:max-w-[500px] max-w-[350px]"
        >
            <h1 className="text-2xl font-semibold text-center mb-2">Sign up</h1>
            {error.general && <p className="text-sm text-red-500">{error.general}</p>}
            <div className="space-y-2">
                <FormField
                    label="Full Name"
                    type="text"
                    name="name"
                    id="name"
                    handleChange={handleChange}
                    error={error.name}
                // placeholder="Jon Snow"
                />
                <FormField
                    label="Email Address"
                    type="email"
                    name="email"
                    id="email"
                    handleChange={handleChange}
                    error={error.email}
                // placeholder="yourname@domain.com"
                />
                <FormField
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    handleChange={handleChange}
                    error={error.password}
                // placeholder="*******"
                />
                <FormField
                    label="Confirm Password"
                    type="password"
                    name="confirm"
                    id="confirm"
                    handleChange={handleChange}
                    error={error.confirm}
                // placeholder="*******"
                />
            </div>
            <div className="mt-4 mb-6">
                <button
                    type="submit"
                    disabled={isError}
                    className="block w-full py-2 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                >
                    Sign up
                </button>
            </div>
            <hr className="mb-4 border-gray-400/20" />
            <div className="flex justify-center text-md">
                <p className="text-gray-500/70">
                    Already have an account? &nbsp;
                    <Link href="/login" className="underline text-gray-700 dark:text-gray-300 hover:text-primary">Login</Link>
                </p>
            </div>
        </form>
    )
}