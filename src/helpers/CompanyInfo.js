'use client';

const CompanyInfo = ({ title, value }) => {
    return (
        <div className="lg:w-[344px] flex flex-col gap-[3px] md:gap-2">
            <h6 className="text-xs md:text-sm font-medium text-[#6E6D6D]">{title}</h6>
            <h4 className="text-sm md:text-[15px] lg:text-base font-medium text-[#3D3D3D]">{value}</h4>
        </div>
    )
}

export default CompanyInfo;