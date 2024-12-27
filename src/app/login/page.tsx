"use client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }
    setError("");
    console.log("Email:", email);
    console.log("Password:", password);
  };
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
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "1.5rem" }}>
          <TextField
            required
            fullWidth
            label="Email"
            value={email}
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="password"
            margin="normal"
            label="Password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href={"/sign-up"}>Forgot password?</Link>
          <Button
            fullWidth
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Login
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
            You dont have an account yet?
          </Typography>
          <Link href={"/sign-up"}>Sign up</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
