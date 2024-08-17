"use client"

import { useState } from "react";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";

export default function LoginForm() {
    const [error, setError] = useState({
        email: "",
        password: "",
        general: ""
    });
    const router = useRouter();

    const isError = !!(error.email || error.password);

    const formSchema = z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(8, "Password must be 8 characters long")
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
        // e.preventDefault();

        // const formData = new FormData(e.currentTarget);

        // const email = formData.get("email");
        // const password = formData.get("password");

        // try {
        //     const res = await signIn("credentials", {
        //         email: email,
        //         password: password,
        //         redirect: false
        //     })
        //     if (res.error) {
        //         throw new Error("Credentials do not match!");
        //     } else {
        //         router.push("/account");
        //     }
        // } catch (err) {
        //     setError({
        //         ...error,
        //         general: err.message
        //     })
        // }
    }
    return (
        <form action="#" method="post" autoComplete="off" onSubmit={handleSubmit}
            className="w-full md:max-w-[500px] max-w-[350px]"
        >
            <h1 className="text-2xl font-semibold text-center mb-2">Login</h1>
            {error.general && <p className="text-sm text-red-500 mb-1">{error.general}</p>}
            <div className="space-y-2">
                <FormField
                    label="Email Address"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="youremail.@domain.com"
                    handleChange={handleChange}
                    error={error.email}
                />
                <FormField
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    handleChange={handleChange}
                    error={error.password}
                />
            </div>
            {/* <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                    <input type="checkbox" name="remember" id="remember"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                    <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                </div>
                <Link href="#" className="text-primary">Forgot password</Link>
            </div> */}
            <div className="mt-4">
                <button
                    type="submit"
                    disabled={isError}
                    className="block w-full py-2 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                >
                    Login
                </button>
            </div>
        </form>
    )
}