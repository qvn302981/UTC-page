import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Box } from "@mui/material";
import React from "react";

export const metadata: Metadata = {
  title: "Hệ Thống Thông Tin Trường Đại Học",
  description: "Hệ thống quản lý thông tin trường đại học.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Box
              component="main"
              sx={{
                position: "relative",
                width: "100vw",
                top: "104px",
                border: "2px solid #56a4fe",
                padding: "6px",
                margin: "6px",
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </body>
    </html>
  );
}
