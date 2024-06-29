'use client';

import Link from "next/link";
import Numbers from "@/helpers/Numbers";
import { TbUserCheck } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";
import { LuPencil, LuUsers } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Actions = () => {
    return (
        <div className="w-full flex items-center md:pt-6 md:px-3 lg:px-6 actions_menu">
            <div className="md:w-full md:max-w-[360px] w-[70%] flex flex-col gap-6">
                <div className="w-full flex md:flex-col-reverse lg:flex-row items-center justify-between gap-4 md:gap-[6px] lg:gap-4">
                    <button className="w-full flex items-center justify-center gap-2 rounded-lg py-2 md:py-3 md:px-[6px] lg:px-6 bg-[#FEF4F2] border-[0.8px] border-[#DC4A2D] text-[#DC4A2D] outline-none hover:bg-[#DC4A2D] hover:border-[#FED3CA] hover:text-white transition duration-300 ease-in-out">
                        <HiOutlineTrash className="w-[14px] h-[14px] md:w-4 lg:w-5 md:h-4 lg:h-5" />
                        <span className="text-sm lg:text-base font-medium">Delete job</span>
                    </button>

                    <Link href="#" className="w-full flex items-center justify-center gap-2 lg:gap-[10px] rounded-lg  py-2 md:py-3 md:px-[6px] lg:px-6 bg-[#DC4A2D] border-2 border-[#FED3CA] text-white hover:bg-[#FEF4F2] hover:border-[#DC4A2D] hover:text-[#DC4A2D] transition duration-300 ease-in-out">
                        <LuPencil className="w-[14px] h-[14px] md:w-4 md:h-4" />
                        <span className="text-sm lg:text-base font-medium">Edit job</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 md:py-2 lg:py-3">
                    <Numbers icon={LuUsers} text="Applicants" number="400" />
                    <hr />
                    <Numbers icon={TbUserCheck} text="Matches" number="100" />
                    <hr />
                    <Numbers icon={FiMessageSquare} text="Messages" number="147" />
                    <hr />
                    <Numbers icon={MdOutlineRemoveRedEye} text="Views" number="800" />
                </div>
            </div>
        </div>
    )
}

export default Actions;