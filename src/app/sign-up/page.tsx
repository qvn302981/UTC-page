import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: 3,
          height: "60vh",
          display: "flex",
          borderRadius: "8px",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          border: "2px solid #3f51b5",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fdfafa",
          "&:hover": {
            borderColor: "#1a237e",
          },
        }}
      >
        <Typography variant="h4" fontWeight="500" gutterBottom>
          Sign up
        </Typography>
        <form style={{ width: "100%", marginTop: "1.5rem" }}>
          <TextField
            required
            fullWidth
            label="Username, Email or Number phone"
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button
            fullWidth
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Sign up
          </Button>
        </form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "1.5rem",
            width: "100%",
          }}
        >
          <Typography fontSize="medium" sx={{ mr: 2 }}>
            You already have an account?
          </Typography>
          <Link href={"/login"}>Log in</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
