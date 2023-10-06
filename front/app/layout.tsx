'use client'

import './globals.css'
import React from "react";
import NavBar from "@/app/components/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: '#f44336',
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
            <title>SSS's Portfolio</title>
        </head>
        <body>
            <ThemeProvider theme={theme}>
                <NavBar />
                {children}
            </ThemeProvider>
        </body>
    </html>
  )
}
