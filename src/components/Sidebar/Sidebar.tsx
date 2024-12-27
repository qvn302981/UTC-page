"use client";
import React, { useState } from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SidebarHeader, StyledDrawer, StyledListItem, StyledSubItem, StyleSubText } from "./Sidebar.types";
import { StyledLink } from "../style.types";

export const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<{ [key: string]: boolean }>({});
  const [activePath, setActivePath] = useState<string | null>(null);
  const toggleKnowledge = (path: string) => {
    setMenuOpen((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };
  const handleActive = (path: string) => {
    setActivePath(path);
  };

  const menuItems = [
    {
      label: "Đăng ký trực tuyến",
      icon: <DashboardIcon />,
      path: "/register",
      children: [
        { label: "Đăng ký học", path: "/register/register-to-study" },
        { label: "Đăng ký chuyên ngành", path: "/register/specialized-registration" },
        { label: "Đăng ký nguyện vọng", path: "/register/register-request" },
        { label: "Tra cứu kết quả đăng ký", path: "/register/registration-results" },
      ],
    },
    { label: "Tin tức", icon: <NewspaperIcon />, path: "/news" },
    { label: "Tra cứu lịch", icon: <DateRangeIcon />, path: "/search" },
    {
      label: "Góc học tập",
      icon: <LocalLibraryIcon />,
      children: [
        { label: "Tra cứu điểm", path: "/knowledge/look-up-points" },
        { label: "Chương trình học", path: "/knowledge/study-programs" },
      ],
      path: "/knowledge"
    },
    {
      label: "Tài chính",
      icon: <CurrencyExchangeIcon />,
      children: [
        { label: "Học phí", path: "/finance/fee" },
        { label: "Thanh toán online", path: "/finance/online-payment" },
      ],
      path: "/finance"
    },
  ];

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <SidebarHeader>
        <Typography variant="h6" noWrap>
          Danh mục chính
        </Typography>
      </SidebarHeader>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.children ? (
              <>
                <StyledListItem key={index} onClick={() => toggleKnowledge(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} sx={{}} />
                  {menuOpen[item.path] ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
                </StyledListItem>
                <Collapse in={!!menuOpen[item.path || item.label]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((subItem, subIndex) => (
                      <StyledSubItem
                        key={subIndex}
                        active={activePath === subItem.path}
                        onClick={() => handleActive(subItem.path)}
                      >
                        <StyledLink href={subItem.path}>
                          <StyleSubText primary={subItem.label}></StyleSubText>
                        </StyledLink>
                      </StyledSubItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <StyledListItem>
                <StyledLink href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </StyledLink>
              </StyledListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </StyledDrawer>
  );
};
