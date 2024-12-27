"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const StyledDrawer = styled(Drawer)(() => ({
  borderRadius: "20px",
  width: 280,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 280,
    boxSizing: "border-box",
    top: "110px",
  },
}));

const StyledLink = styled(Link)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledSubItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

export const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<{ [key: string]: boolean }>({});
  const toggleKnowledge = (path: string) => {
    setMenuOpen((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
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
                <Collapse in={menuOpen[item.path]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((subItem, subIndex) => (
                      <StyledListItem key={subIndex} sx={{ pl: 4 }}>
                        <StyledLink href={subItem.path}>
                          <ListItemText primary={subItem.label}></ListItemText>
                        </StyledLink>
                      </StyledListItem>
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
