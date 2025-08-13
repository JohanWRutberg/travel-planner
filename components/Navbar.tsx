import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 border-b border-gray-200">
            <div className ="container mx-auto flex justify-between items-center px-6 lg:px-8" >
                <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                <span className="text-2xl font-bold text-gray-800">Travel Planner</span>
                </Link>

                <div className="flex items-center space-x-4">
                    <Link href={"/trips"} className="text-slate-900 hover:text-sky-500">My Trips</Link>
                    <Link href={"/globe"} className="text-slate-900 hover:text-sky-500">Globe</Link>
                </div>
            </div>
        </nav>
    );
}
