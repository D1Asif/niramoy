import Logo from './Logo'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="container flex items-center justify-between space-x-10 py-6">
			<Logo />
			<ul className="flex items-center space-x-5">
				<li>
                    <Link href="/about-us">About Us</Link>
				</li>
				<li>
					<Link className="bg-primary/30 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] px-2 py-1 inline-block" href="/login">
                        Login
					</Link>
				</li>
			</ul>
		</nav>
  )
}
