import { auth } from '@/auth'
import Logo from './Logo'
import Link from "next/link"
import Logout from './auth/Logout';

export default async function Navbar({ fromAuth }) {
    const session = await auth();
    return (
        <nav className="container flex items-center justify-between space-x-10 py-6">
            <Logo />
            <ul className="flex items-center md:space-x-6 space-x-5">
                <li>
                    <Link className='hover:underline' href="/about-us">About Us</Link>
                </li>
                {!fromAuth && (
                    <>
                        {session?.user ? (
                            <>
                                <Link href="/account">
                                    {/* <li className='bg-green-100 text-green-600 rounded-full h-12 w-12 capitalize flex justify-center items-center text-xl'>
                                        {session?.user?.username[0]}
                                    </li> */}
                                    <li className='hover:underline'>
                                        Account
                                    </li>
                                </Link>
                                <li>
                                    <Link href="/create-new-patient">
                                        <button
                                            className="block w-full py-2 px-4 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                                        >
                                            Create Entry
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Logout />
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link href="/login">
                                    <button
                                        className="block w-full py-2 px-4 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                                    >
                                        Login
                                    </button>
                                </Link>
                            </li>
                        )
                        }
                    </>

                )}
            </ul >
        </nav >
    )
}
