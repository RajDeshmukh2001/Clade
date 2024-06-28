'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion as m } from 'framer-motion';

const links = [
    { id: "preview", value: "Job Preview"},
    { id: "applicants", value: "Applicants"},
    { id: "match", value: "Match"},
    { id: "messages", value: "Messages"},
]

const JobMenuLinks = () => {
    const [activeLink, setActiveLink] = useState('preview');

    return (
        <>
            {links.map((link) => (
                <Link 
                    href="#"
                    key={link.id}
                    onClick={() => setActiveLink(link.id)}
                    className={`${activeLink === link.id ? 'text-[#DC4A2D] font-semibold' : 'text-[#888888] font-medium'} relative flex items-center justify-center text-[15px] md:text-base lg::text-xl py-2 md:py-[15px] lg:py-5`}
                >
                    {activeLink === link.id && (
                        <m.div
                            layoutId="active-pill"
                            className="absolute bottom-0 h-[2px] w-3/5 rounded-full bg-[#DC4A2D]"
                            transition={{ duration: 0.5 }} 
                        />
                    )}
                    <span className="relative z-10">{link.value}</span>
                </Link>
            ))}
        </>
    )
}

export default JobMenuLinks;