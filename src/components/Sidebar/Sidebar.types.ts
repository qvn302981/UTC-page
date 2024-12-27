import { styled } from "@mui/material/styles";
import { Box, Drawer, ListItem, ListItemText } from "@mui/material";

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


const StyleSubText = styled(ListItemText)(({ }) => ({
    paddingLeft: '40px'
}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(1.5),
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledSubItem = styled(ListItem)<{ active?: boolean }>(({ theme, active }) => ({
    color: active ? theme.palette.primary.main : theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(1.5),
    "&:hover": {
        backgroundColor: '#eeeeee',
    },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
}));

export {
    SidebarHeader,
    StyledDrawer,
    StyleSubText,
    StyledSubItem,
    StyledListItem
}