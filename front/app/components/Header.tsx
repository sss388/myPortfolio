'use client'

import React from 'react';
import {Box, Divider, Typography, useScrollTrigger} from "@mui/material";
const Header = () => {

    return (
        <div className="relative h-[600px] justify-center flex items-center">
            <img src='header_img.jpg' className="object-cover w-full h-[600px] absolute" />
            <div className="absolute">
                <Box
                    sx={{
                        mr: 2,
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontFamily: 'Black Han Sans',
                    }}
                >
                    <div className="text-[80px]">
                        - 신성식 -
                    </div>
                    <div className="text-[48px]">
                        풀스택 개발자 포트폴리오
                    </div>
                    <Divider />
                    <div className="text-[32px]">
                        다양한 기술스택을 보유한 스스로 성장하는 인재입니다.
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default Header;
