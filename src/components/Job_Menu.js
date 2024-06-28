'use client';

import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { useMenuContext } from "@/context/MenuContext";
import JobMenuLinks from "@/helpers/JobMenuLinks";

const Job_Menu = ({ children }) => {
    const { showMenu, setShowMenu } = useMenuContext();

    return (
        <div className="w-full flex flex-col gap-[1px]">
            <div className={`w-full h-12 md:h-[56px] lg:h-[67px] bg-white border-y border-[#E7E7E7] flex items-center px-6 md:px-10 lg:px-24 overflow-x-scroll md:overflow-x-auto z-30 ${showMenu ? 'job_menu' : ''}`}>
                <div className="w-full flex items-center justify-between md:justify-normal md:gap-[72px]">
                    <JobMenuLinks />
                    
                    {
                        showMenu ?
                        <button className="md:hidden flex p-1 shadow-md rounded" onClick={() => setShowMenu(!showMenu)}>
                            <IoClose className="text-[20px] text-[#888888]" />
                        </button>
                        :
                        <button className="md:hidden flex p-1 shadow-md rounded" onClick={() => setShowMenu(!showMenu)}>
                            <BiMenuAltRight className="text-[20px] text-[#888888]" />
                        </button>
                    }
                </div>
            </div>

            <div className={`w-full flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-[2px] relative ${showMenu ? 'pt-[49px]' : 'pt-0'}`}>
                {children}
            </div>
        </div>
    )
}

export default Job_Menu;