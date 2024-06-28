'use client';

import { PiHandCoins, PiBellSimple } from "react-icons/pi";
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import Link from "next/link";

const ResponsiveNavbar = () => {
    return (
        <div className="md:hidden flex w-full h-12 ">
            <div className="w-full h-12 px-6 flex items-center justify-between gap-3 fixed bottom-0 left-0 bg-white border-t-2 border-[#FEF4F2]">
                <Link href="#" className="flex flex-col items-center justify-center gap-[2px] flex-1 text-white bg-[#DC4A2D] py-1 rounded-full">
                    <FiBriefcase className="w-4 h-4 font-semibold" />
                    <span className="text-[11px] font-semibold tracking-wide">Jobs</span>
                </Link>

                <Link href="#" className="flex flex-col items-center justify-center gap-[2px] flex-1 py-1 rounded-full">
                    <div className="flex relative">
                        <FiMessageSquare className="w-4 h-4 text-[#B0B0B0]" />
                        <span className="absolute top-0 right-0 w-[3px] h-[3px] bg-[#DC4A2D] rounded-full"></span>
                    </div>
                    <span className="text-[11px] font-medium text-[#B0B0B0] tracking-wide">Messages</span>
                </Link>

                <Link href="#" className="flex flex-col items-center justify-center gap-[2px] flex-1 py-1 rounded-full">
                    <PiHandCoins className="w-4 h-4 text-[#B0B0B0]" />
                    <span className="text-[11px] font-medium text-[#B0B0B0] tracking-wide">Payments</span>
                </Link>

                <Link href="#" className="flex flex-col items-center justify-center gap-[2px] flex-1 py-1 rounded-full">
                    <div className="flex relative">
                        <PiBellSimple className="w-4 h-4 text-[#B0B0B0]" />
                        <span className="absolute top-0 right-0 w-[3px] h-[3px] bg-[#DC4A2D] rounded-full"></span>
                    </div>
                    <span className="text-[11px] font-medium text-[#B0B0B0] tracking-wide">Notifications</span>
                </Link>
            </div>
        </div>
    )
}

export default ResponsiveNavbar;