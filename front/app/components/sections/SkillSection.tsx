'use client'

import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import Skills from "@/app/components/Skills";

const SkillSection = () => {
    const frontSkills: string[] = [
        'html', 'css', 'JavaScript', 'TypeScript', 'React', 'Redux', 'jQuery',
        'NextJs', 'Vue', 'vuex', 'Bootstrap', 'Mui', 'Vuetify', 'Tailwind-css',
        'ChartJs', 'Ckeditor5', 'Swiper', 'EmailJs'
    ];

    const backSkills: string[] = [
        'Java', 'kotlin', 'Servlets&Jsp', 'Spring', 'Spring-Boot', 'Nest'
    ]

    const DBSkills: string[] = [
        'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'PlanetScale'
    ]

    const deploymentSkills: string[] = [
        'Docker', 'Docker-Compose', 'Vercel', 'AWS'
    ]

    const toolSkills: string[] = [
        'Eclipse', 'VS-Code', 'IntelliJ', 'SQL-Developer',
    ]

    const communicationSkills: string[] = [
        'Figma', 'Jira', 'Confluence'
    ]

    const versionControlSkills: string[] = [
        'git', 'GitHub', 'Sourcetree',
    ]

    const certificateSkills: string[] = [
        '정보처리기사', '컴퓨터활용능력1급', 'JLPTN1'
    ]

    const etcSkills: string[] = [
        'Apollo', 'Cloudinary'
    ]

    const slideCut = 7;

    return (
        <Box className="bg-blue-500 p-8 justify-center flex pb-24">
            <Box className="w-[1024px]">
                <Box sx={{color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Black Han Sans',
                    fontSize: '48px'}}
                >
                    <div className="justify-center flex">Skills</div>
                    <Divider color={'white'} className="mb-8 opacity-50"/>

                    <div className="text-left text-[28px]">Frontend</div>
                    <Skills skills={frontSkills} slideCut={slideCut}/>

                    <div className="text-left text-[28px] mt-5">Backend</div>
                    <Skills skills={backSkills} slideCut={slideCut}/>

                    <div className="text-left text-[28px] mt-5">DB</div>
                    <Skills skills={DBSkills} slideCut={slideCut}/>

                    <div className="text-left text-[28px] mt-5">Deployment</div>
                    <Skills skills={deploymentSkills} slideCut={slideCut}/>

                    <div className="text-left text-[28px] mt-5">Tool</div>
                    <Skills skills={toolSkills} slideCut={slideCut}/>

                    <div className="flex gap-3 grid grid-cols-2">
                        <div>
                            <div className="text-left text-[28px] mt-5">Communication</div>
                            <Skills skills={communicationSkills} slideCut={slideCut/2}/>
                        </div>
                        <div>
                            <div className="text-left text-[28px] mt-5">Version Control</div>
                            <Skills skills={versionControlSkills} slideCut={slideCut/2}/>
                        </div>
                        <div>
                            <div className="text-left text-[28px] mt-5">Certificate</div>
                            <Skills skills={certificateSkills} slideCut={slideCut/2}/>
                        </div>
                        <div>
                            <div className="text-left text-[28px] mt-5">Etc</div>
                            <Skills skills={etcSkills} slideCut={slideCut/2}/>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default SkillSection;