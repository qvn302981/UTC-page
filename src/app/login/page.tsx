"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase/config"; // Đường dẫn cấu hình Firebase
import { doc, getDoc } from "firebase/firestore";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const auth = getAuth();

    try {
      // Xác thực với Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Đăng nhập thành công:", user);

      // Lấy thông tin người dùng từ Firestore
      const userDoc = doc(db, "auth", user.uid);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("Thông tin người dùng:", userData);

        // Chuyển sang trang update và truyền dữ liệu
        router.push(`/update?name=${userData.name}&email=${userData.email}`);
      } else {
        console.error("Không tìm thấy thông tin người dùng");
      }
    } catch (error: any) {
      console.error("Lỗi đăng nhập:", error.message);
      setError("Đăng nhập thất bại. Vui lòng kiểm tra email hoặc mật khẩu.");
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
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin} style={{ width: "100%", marginTop: "1.5rem" }}>
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
