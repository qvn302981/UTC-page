"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  FormControl,
  Select,
} from "@mui/material";
import { Search, AccountCircle } from "@mui/icons-material";
import ImageLogo from "../../assets/images/LogoUTC.png";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconContainer, SearchBar, SearchIconWrapper, StyledInputBase, StyledMenuItem } from "./Header.types";
import { StyledLink } from "../style.types";

export const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string>("vn");
  const { i18n } = useTranslation();
  const listLanguageOptions = [
    { key: 1, value: "en", label: "EN" },
    { key: 1, value: "vn", label: "VN" },
  ];
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeLanguage = (event: any) => {
    const value = event.target?.value as string;
    setLanguage(value);
    // localStorage.setItem("localLanguage", value);
    i18n.changeLanguage(value);
  };

  return (
    <AppBar sx={{ backgroundColor: "#56a4fe" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          height: "100px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
          <Image src={ImageLogo} alt="Logo" style={{ height: 60, marginRight: 8, width: 60 }} />
          <Typography fontWeight="600" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hệ Thống Thông Tin Trường Đại Học
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <SearchBar sx={{ mr: 2 }}>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Tìm kiếm…" inputProps={{ "aria-label": "search" }} />
          </SearchBar>

          <FormControl>
            <Select value={language} onChange={handleChangeLanguage} size="small">
              {listLanguageOptions.map((item) => (
                <MenuItem key={item.key} value={item.value}>
                  <Box
                    sx={{
                      mr: 2,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box component="span" sx={{ mr: "4px" }}>
                      <Typography fontSize="18px" fontWeight={500}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={handleClose}>
                <StyledLink href="/update-information">
                  <IconContainer>
                    <PersonIcon fontSize="small" />
                  </IconContainer>
                  <Typography>Thông tin cá nhân</Typography>
                </StyledLink>
              </StyledMenuItem>

              <StyledMenuItem onClick={handleClose}>
                <IconContainer>
                  <LockOpenIcon fontSize="small" />
                </IconContainer>
                <Typography>Đổi mật khẩu</Typography>
              </StyledMenuItem>

              <StyledMenuItem onClick={handleClose}>
                <IconContainer>
                  <HelpOutlineIcon fontSize="small" />
                </IconContainer>
                <Typography>Trợ giúp</Typography>
              </StyledMenuItem>

              <StyledMenuItem onClick={handleClose}>
                <StyledLink href="/login">
                  <IconContainer>
                    <LogoutIcon fontSize="small" />
                  </IconContainer>
                  <Typography>Đăng xuất</Typography>
                </StyledLink>
              </StyledMenuItem>
            </Menu>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
