'use client';

import Link from "next/link";
import { PiHandCoins } from "react-icons/pi";
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";

const NavLinks = () => {
    return (
        <div className="md:w-[430px] lg:w-[538px] md:h-[54px] lg:h-[74px] hidden md:flex items-center justify-between rounded-full border-[0.5px] border-[#D1D1D1]">
            <Link href="#" className="md:w-[90px] lg:w-[109px] md:h-[38px] lg:h-[58px] flex items-center justify-center gap-2 bg-[#DC4A2D] my-2 ml-2 rounded-[49px] border-2 border-[#FCB4A5]">
                <FiBriefcase className="md:w-5 lg:w-6 md:h-5 lg:h-6 text-white" />
                <span className="md:text-base lg:text-xl font-medium text-white">Jobs</span>
            </Link>

            <Link href="#" className="md:w-[80px] lg:w-32 md:h-[38px] lg:h-[27px] flex items-center justify-center gap-2">
                <div className="flex relative">
                    <FiMessageSquare className="md:w-5 lg:w-6 md:h-5 lg:h-6 text-[#B0B0B0]" />
                    <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-[#DC4A2D] rounded-full"></span>
                </div>
                <span className="md:text-base lg:text-xl font-medium text-[#B0B0B0]">Messages</span>
            </Link>

            <Link href="#" className="md:w-[105px] lg:w-32 md:h-[38px] lg:h-[27px] flex items-center justify-center gap-2 mr-6">
                <PiHandCoins className="md:w-5 lg:w-6 md:h-5 lg:h-6 text-[#B0B0B0]" />
                <span className="md:text-base lg:text-xl font-medium text-[#B0B0B0]">Payments</span>
            </Link>
        </div>
    )
}

export default NavLinks;