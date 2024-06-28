'use client';

import CompanyInfo from "@/helpers/CompanyInfo";
import Image from "next/image";

const CompanyProfile = () => {
    return (
        <div className="flex flex-col gap-4 px-6 py-5 md:pl-10 lg:pl-24 md:py-5 lg:py-6 bg-white">
            <div className="flex items-center gap-2 lg:gap-3">
                <Image src="/logo.png" alt="Company_logo" width={40} height={40} className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded" />
                <span className="text-sm md:text-base lg:text-xl font-medium text-[#4F4F4F] tracking-wide md:tracking-normal">Atlassian</span>
            </div>

            <div className="lg:w-[736px] grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 lg:gap-y-8 gap-x-12">
                <CompanyInfo title="Company size" value="1k - 2k Employees" />
                <CompanyInfo title="Type" value="Private" />
                <CompanyInfo title="Sector" value="Information Technology, Infrastructure" />
                <CompanyInfo title="Funding" value="Bootstrapped" />
                <CompanyInfo title="Founded In" value="2019" />
                <CompanyInfo title="Founded By" value="Scott Farquhar, Mike Cannon-Brookes" />
            </div>
        </div>
    )
}

export default CompanyProfile;