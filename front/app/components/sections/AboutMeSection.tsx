'use client'

import React from 'react';
import {Box, Divider} from "@mui/material";
import {CalendarMonth, Edit, Email, LocationOn, Person, Smartphone} from "@mui/icons-material";

const AboutMeSection = () => {
    return (
        <div className="p-20 justify-center flex">
            <div>
                <Box className="items-center flex justify-center"
                     sx={{
                         fontFamily: 'Black Han Sans',
                         fontSize: '48px',
                     }}
                >
                    About Me
                </Box>

                <Divider className="mb-8"/>

                <Box className="w-[1024px] grid grid-cols-3 gap-8"
                     sx={{
                         fontFamily: 'Sunflower',
                         fontSize: '32px',
                     }}
                >
                    <div className="flex">
                        <Person className="text-[48px]" />
                        <div>
                            <div>이름</div>
                            <div className="text-[24px] text-[#666]">신성식</div>
                        </div>
                    </div>
                    <div className="flex">
                        <CalendarMonth className="text-[48px]"/>
                        <div>
                            <div>생년월일</div>
                            <div className="text-[24px] text-[#666]">93.10.12</div>
                        </div>
                    </div>
                    <div className="flex">
                        <LocationOn className="text-[48px]"/>
                        <div>
                            <div>주소지</div>
                            <div className="text-[24px] text-[#666]">서울특별시 영등포구</div>
                        </div>
                    </div>
                    <div className="flex">
                        <Smartphone className="text-[48px]" />
                        <div>
                            <div>연락처</div>
                            <div className="text-[24px] text-[#666]">010-9280-4419</div>
                        </div>
                    </div>
                    <div className="flex">
                        <Email className="text-[48px]"/>
                        <div>
                            <div>이메일</div>
                            <div className="text-[24px] text-[#666]">sinss4419@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex">
                        <Edit className="text-[48px]"/>
                        <div>
                            <div>학력</div>
                            <div className="text-[24px] text-[#666]">학점은행제 정보통신공학사</div>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default AboutMeSection;