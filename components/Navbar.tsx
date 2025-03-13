"use client";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-center gap-6 p-4 bg-green-100 shadow-md">
            <Link href="/" className="text-lg font-semibold">About Me</Link>
            <Link href="/timeline-projects" className="text-lg font-semibold">Timeline & Projects</Link>
            <Link href="/music" className="text-lg font-semibold">Music</Link>
            <Link href="future-plans" className="text-lg font-semibold">Future Plans</Link>
        </nav>
    )
}