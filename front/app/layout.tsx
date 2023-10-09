'use client'

import './globals.css'
import React from "react";
import NavBar from "@/app/components/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {grey, indigo} from '@mui/material/colors';
import AuthContext from "@/app/context/AuthContext";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: indigo[500],
        },
    },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
        <head>
            <title>SSS&apos;s Portfolio</title>
        </head>
        <body>
            <AuthContext>
                <ThemeProvider theme={theme}>
                    <NavBar />
                    {children}
                </ThemeProvider>
            </AuthContext>
        </body>
    </html>
  )
}
