import { styled } from "@mui/material/styles";
import Link from "next/link";

const StyledLink = styled(Link)(() => ({
    display: "flex",
    alignItems: "center",
}));

export { StyledLink }