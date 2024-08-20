import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button
            className="block w-full py-2 px-3 text-center text-[#171923] bg-red-500 border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
            onClick={signOut}
        >
            Log out
        </button>
    )
}