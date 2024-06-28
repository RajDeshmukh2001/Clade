'use client';

const JobDescription = () => {
    return (
        <div className="flex flex-col gap-2 px-6 py-5 md:pl-10 lg:pl-24 md:py-5 lg:py-6 bg-white">
            <h5 className="text-xs md:text-sm font-medium text-[#6E6D6D;]">Aboute the job</h5>

            <div className="flex flex-col text-sm md:text-[15px] lg:text-base font-medium text-[#3D3D3D] leading-[22px] md:leading-7">
                <ol className="list-decimal list-inside">
                    <li>Handle the UI/UX research design</li>
                    <li>Work on researching on latest web applications designs & trends</li>
                    <li>Work on conceptualizing and visualizing</li>
                    <li>Work on creating graphics content and other graphic related works</li>
                </ol>
                Benefits:
                <ul className="list-disc list-inside pl-3">
                    <li>Health insurance</li>
                    <li>Provident Fund</li>
                </ul>
                Schedule:
                <ul className="list-disc list-inside pl-3">
                    <li>Day shift</li>
                </ul>
                Supplemental pay types:
                <ul className="list-disc list-inside pl-3">
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                </ul>
                Work Location: In person
            </div>
        </div>
    )
}

export default JobDescription;