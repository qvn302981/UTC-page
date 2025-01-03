"use client";
import Link from "next/link";
import { useState } from "react";
import { db } from "../../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (!email || !name || !password) {
        setError("Vui lòng điền thông tin!");
        return;
      }
      const docRef = await addDoc(collection(db, "auth"), {
        email,
        name,
        password
      });
      setError("Đăng ký thành công!");
      console.log("Document written with ID: ", docRef.id);
      setEmail('')
      setPassword('')
      setName('')
    } catch (error) {
      setError("Có lỗi xảy ra, Vui lòng thử lại sau.")
    }
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
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "1.5rem" }}>
          <TextField
            required
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Full Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email or Number phone"
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            <Link href="/login">
              Sign up
            </Link>
          </Button>
        </form>
        {error && <span>{error}</span>}
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
