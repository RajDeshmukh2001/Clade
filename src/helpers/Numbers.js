'use client';

const Numbers = ({ icon: Icon, text, number }) => {
    return (
        <div className="w-full max-w-[336px] flex items-center justify-between">
            <div className="w-full max-w-[135px] md:p-2 lg:p-[10px] flex items-center gap-[10px] text-[#4F4F4F]">
                <Icon className="w-[14px] h-[14px] md:w-4 lg:w-5 md:h-4 lg:h-5" />
                <span className="text-sm md:text-[15px] lg:text-base font-medium">{text}</span>
            </div>

            <div className="py-[6px] md:px-3 lg:px-4">
                <span className="text-sm md:text-base lg:text-xl font-semibold text-[#3D3D3D]">{number}</span>
            </div>
        </div>
    )
}

export default Numbers;