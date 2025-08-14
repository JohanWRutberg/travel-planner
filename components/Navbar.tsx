"use client";

import { login } from "@/lib/auth-actions";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-bold text-gray-800">
            Travel Planner
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href={"/trips"} className="text-slate-900 hover:text-sky-500">
            My Trips
          </Link>
          <Link href={"/globe"} className="text-slate-900 hover:text-sky-500">
            Globe
          </Link>
          <button
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm cursor-pointer"
            onClick={login}
          >
            Sign In
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.5 544.3"
            >
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.4-1.5-34.1-4.4-50.4H272v95.3h146.9c-6.4 34.6-25.8 63.9-55 83.5v68h88.8c52-47.9 81.8-118.5 81.8-196.4z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c74.7 0 137.4-24.8 183.2-67.5l-88.8-68c-24.6 16.5-56.1 26.2-94.4 26.2-72.5 0-134-48.9-155.9-114.5h-91v71.7c45.3 89.2 137.8 152.1 246.9 152.1z"
              />
              <path
                fill="#FBBC05"
                d="M116.1 320.5c-10.7-31.4-10.7-65.5 0-96.9v-71.7h-91c-39.5 77.9-39.5 162.5 0 240.4l91-71.8z"
              />
              <path
                fill="#EA4335"
                d="M272 107.7c39.4 0 75 13.6 102.9 40.3l77.1-77.1C409.2 24.8 346.5 0 272 0 162.9 0 70.4 62.9 25.1 152.1l91 71.7C138 156.6 199.5 107.7 272 107.7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
