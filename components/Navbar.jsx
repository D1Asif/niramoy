import Logo from './Logo'
import Link from "next/link"

export default function Navbar({ fromAuth }) {
    return (
        <nav className="container flex items-center justify-between space-x-10 py-6">
            <Logo />
            <ul className="flex items-center space-x-5">
                <li>
                    <Link href="/about-us">About Us</Link>
                </li>
                {!fromAuth && (
                    <li>
                        <Link href="/login">
                            <button
                                className="block w-full py-2 px-4 text-center text-[#171923] bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-medium disabled:bg-gray-500 disabled:border-none disabled:hover:text-white"
                            >
                                Login
                            </button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
