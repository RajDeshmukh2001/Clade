'use client';

import Image from "next/image";
import NavLinks from "@/helpers/NavLinks";
import { PiBellSimple } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
    return (
        <nav className="w-full h-[60px] md:h-20 lg:h-28 flex items-center justify-center relative">
            <div className="w-full flex items-center justify-between py-2 md:py-3 lg:py-5 px-6 md:px-10 fixed top-0 left-0 bg-white shadow-navbar z-50">
                <div className="w-20 md:w-20 lg:w-[100px] h-10 md:h-10 lg:h-[61px] py-2 px-4 md:px-7 bg-[#E7E7E7] flex items-center justify-center">
                    <h2 className="text-lg md:text-xl font-bold text-center text-[#DC4A2D] w-[47px] h-[27px]">Logo</h2>
                </div>

                <NavLinks />

                <div className="flex items-center gap-4 py-[10px] md:p-[10px]">
                    <div className="hidden md:flex relative">
                        <PiBellSimple className="md:w-6 lg:w-8 md:h-6 lg:h-8" />
                        <span className="absolute top-0 right-1 w-[5px] h-[5px] bg-[#DC4A2D] rounded-full"></span>
                    </div>

                    <div className="flex items-center gap-[6px]">
                        <Image src="/logo.png" alt="Account" width={40} height={40} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-[60px]" />
                        <GoChevronDown className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;