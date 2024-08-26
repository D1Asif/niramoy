import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 md:py-4 mt-8">
            <div className="container mx-auto">
                <p className="text-center text-md text-gray-600 dark:text-gray-400">
                    Made with 💖 | By Bikolpo | <Link className='underline' href={"https://discord.gg/rYM4g8HsAu"}>Join Discord</Link>
                </p>
            </div>
        </footer>
    )
}
