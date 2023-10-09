'use client'

import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import {Person, PersonOff, Settings} from "@mui/icons-material";
import {signIn, signOut, useSession} from 'next-auth/react';

const NavBar = () => {
    const scroll = useScrollTrigger({
        disableHysteresis: true, // 히스테리스 비활성화
        threshold: 0 // 스크롤 위치가 0일 때만 true 반환
    });

    const navItems = ['AboutMe', 'Skills', 'Projects'];

    const scrollToSection = (section: string) => {
        switch (section) {
            case 'AboutMe': scrollTo(0, 550); break;
            case 'Skills': scrollTo(0, 1010); break;
            case 'Projects': scrollTo(0, 2710); break;
        }
    };

    const { data: session } = useSession();

    return (
        <AppBar color={`${scroll ? 'primary' : 'transparent'}`}>
            <Toolbar className="justify-between flex">
                <Typography
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'noto',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    SSS&apos;s Portfolio
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: 'inherit' }} onClick={() => scrollToSection(item)}>
                            {item}
                        </Button>
                    ))}
                    {session ? (
                        <IconButton onClick={() => signOut()}>
                            {session?.user?.email === process.env.NEXT_PUBLIC_MY_EMAIL as string ? (
                                <Person/>
                            ) : (
                                <PersonOff/>
                            )}
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => signIn("google")}>
                            <Settings/>
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;