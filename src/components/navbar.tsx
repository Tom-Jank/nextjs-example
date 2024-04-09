import Link from "next/link";

export function Navbar() {
    return (
        <nav className="shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="md:order-1">
                    <Link href="/">My App</Link>
                </div>
                <div className="order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        <li className="md:px-4 md:py-2 hover:text-gray-400"><Link href="/dashboard">Dashboard</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/chat">Chats</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/about">About</Link></li>
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                </div>
            </div>
        </nav>
    );
}
