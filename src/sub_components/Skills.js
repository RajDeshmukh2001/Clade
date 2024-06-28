"use client";

import Image from "next/image";

const Skills = () => {
    return (
        <div className="flex flex-col md:flex-row lg:gap-x-16 gap-y-6 md:gap-y-8 flex-wrap px-6 py-5 md:pl-10 lg:pl-24 md:py-5 lg:py-6 bg-white">
            <div className="w-full md:w-[170px] flex flex-col gap-1 md:gap-2">
                <h5 className="text-[#6E6D6D] text-xs md:text-sm font-medium">Skills Required</h5>

                <div className="flex md:flex-col flex-wrap gap-2">
                    <div className="w-fit flex items-center gap-[6px] py-1 px-[6px] rounded-lg border border-[#D0D5DD]">
                        <Image src="/figma.png" alt="figma" width={16} height={16} />
                        <h6 className="text-xs font-medium text-[#344054]">Figma</h6>
                    </div>

                    <div className="w-fit flex items-center gap-[6px] py-1 px-[6px] rounded-lg border border-[#D0D5DD]">
                        <Image src="/illustrator.png" alt="figma" width={16.41} height={16} />
                        <h6 className="text-xs font-medium text-[#344054]">Adobe Illustrator</h6>
                    </div>

                    <div className="w-fit flex items-center gap-[6px] py-1 px-[6px] rounded-lg border border-[#D0D5DD]">
                        <Image src="/Adobe_Xd.png" alt="figma" width={16.41} height={16} />
                        <h6 className="text-xs font-medium text-[#344054]">Adobe XD</h6>
                    </div>
                </div>
            </div>

            <div className="w-[170px] flex flex-col gap-1 md:gap-2">
                <h5 className="text-[#6E6D6D] text-xs md:text-sm font-medium">Preferred Language</h5>
                <h6 className="text-sm md:text-[15px] lg:text-base font-[550] md:font-semibold text-[#3D3D3D]">English</h6>
            </div>

            <div className="w-[170px] flex flex-col gap-1 md:gap-2">
                <h5 className="text-[#6E6D6D] text-xs md:text-sm font-medium">Type</h5>
                <h6 className="text-sm md:text-[15px] lg:text-base font-[550] md:font-semibold text-[#3D3D3D]">Full time</h6>
            </div>

            <div className="w-[174px] flex flex-col gap-1 md:gap-2">
                <h5 className="text-[#6E6D6D] text-xs md:text-sm font-medium">Years of Experience</h5>
                <h6 className="text-sm md:text-[15px] lg:text-base font-[550] md:font-semibold text-[#3D3D3D]">3+ Years of Experience</h6>
            </div>
        </div>
    );
};

export default Skills;
