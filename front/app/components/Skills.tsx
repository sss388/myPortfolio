'use client'

import React from 'react';
import {Box, Card, Divider, IconButton, Tooltip, Typography} from "@mui/material";
import {color} from "@mui/system";
import {Autoplay, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '@/public/skills/slide.css'

interface SkillsProps {
    skills: string[];
    slideCut: number;
}

const Skills: React.FC<SkillsProps> = ({
    skills, slideCut,
                                       }) => {

    return (
        <div className={`p-4 flex items-center h-[150px] bg-white relative rounded-lg`}>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Navigation, Autoplay]}
            >
                {Array.from({length: Math.ceil(skills.length/slideCut)}, (_, index) => (
                    <SwiperSlide className="gap-3" key={index}>
                        {Array.from({length: slideCut}, (_, index2) => {

                            if(skills.length <= index*slideCut + index2)
                                return null;

                            return (
                                <Tooltip title={`${skills[index*slideCut + index2]}`} placement="top" arrow key={index2}>
                                    <Box className="p-1 transition ease-in-out hover:scale-110">
                                        <img alt={`${skills[index*slideCut + index2]}`}
                                            src={`/skills/${skills[index*slideCut + index2]}.png`}
                                            className={`w-[100px] h-[100px] object-contain`}
                                        />
                                    </Box>
                                </Tooltip>
                            )
                        })}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skills;