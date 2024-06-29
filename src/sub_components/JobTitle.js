'use client';

import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia"; 

const JobTitle = () => {
    return (
        <div className="w-full flex flex-col gap-2 lg:gap-6 px-6 py-5 md:pl-10 lg:pl-24 md:py-5 lg:py-6 bg-white">
            <div className="flex items-center flex-wrap md:flex-nowrap gap-x-2 gap-y-1 md:gap-2 lg:gap-3">
                <h1 className="text-base md:text-xl lg:text-4xl font-semibold text-[#3D3D3D]">Senior Product Designer</h1>

                <span className="w-[3px] h-[3px] md:w-1 md:h-1 rounded-full bg-[#D1D1D1]"></span>

                <p className="text-[11px] lg:text-sm font-normal md:font-medium text-[#888888]">posted 2 days ago</p>

                <div className="flex items-center gap-[6px] bg-[#ECFDF3] border border-[#ABEFC6] py-[2px] md:py-[3px] lg:py-1 px-[6px] lg:px-2 rounded-full">
                    <span className="w-[3px] h-[3px] md:w-1 lg:w-2 md:h-1 lg:h-2 rounded-full bg-[#067647]"></span>
                    <h6 className="text-[11px] md:text-xs font-medium text-[#067647]">Open</h6>
                </div>
            </div>
                
            <div className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center gap-1 md:gap-2">
                    <GrLocation className="text-[#5D5D5D] w-3 h-3 md:w-4 lg:w-6 md:h-4 lg:h-6" />
                    <h5 className="text-[13px] md:text-[15px] lg:text-xl font-medium text-[#5D5D5D]">Delaware, USA</h5>
                </div>
                <span className="w-[3px] h-[3px] md:w-1 md:h-1 rounded-full bg-[#D1D1D1]"></span>
                <div className="flex items-center gap-1 md:gap-3">
                    <LiaCoinsSolid className="text-[#5D5D5D] md:w-5 lg:w-6 md:h-5 lg:h-6 transform scale-x-[-1]" />
                    <h5 className="text-[13px] md:text-[15px] lg:text-xl font-medium text-[#5D5D5D]">$300k-$400k</h5>
                </div>
            </div>
        </div>
    )
}

export default JobTitle;