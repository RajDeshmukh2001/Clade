'use client';

import Job_Menu from "./Job_Menu";
import Skills from "@/sub_components/Skills";
import Actions from "@/sub_components/Actions";
import JobTitle from "@/sub_components/JobTitle";
import { useMenuContext } from "@/context/MenuContext";
import JobDescription from "@/sub_components/JobDescription";
import CompanyProfile from "@/sub_components/CompanyProfile";

const Job = () => {
    const { showMenu } = useMenuContext();

    return (
        <Job_Menu>
            <div className="w-full md:col-span-2 lg:col-span-3 flex flex-col gap-[1px]">
                <JobTitle />
                <Skills />
                <JobDescription />
                <CompanyProfile />
            </div>

            <div className={`${showMenu ? 'flex' : 'hidden'} md:w-full md:block bg-white shadow-sidebar transition duration-300 open_container`}>
                <Actions />
            </div>
        </Job_Menu>
    )
}

export default Job;