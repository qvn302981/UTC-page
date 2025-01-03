'use client'
import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Avatar,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSearchParams } from "next/navigation";

export default function UpdateForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const [name, setName] = useState<string>(searchParams.get("name") || "");
    const [email, setEmail] = useState<string>(searchParams.get("email") || "");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        birthdate: '',
        phone: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    };

    useEffect(() => {
        // Nếu cần load thêm dữ liệu từ backend
        console.log("Name:", name, "Email:", email);
    }, [name, email]);

    const handleUpdate = () => {
        console.log("Updating user data:", { name, email });
        // Gửi dữ liệu cập nhật lên Firebase hoặc Backend API
    };

    return (
        <Box
            sx={{
                margin: "auto",
                padding: 4,
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Cập Nhật Thông Tin
            </Typography>

            <Box sx={{ textAlign: "center", marginBottom: 4 }}>
                <Avatar
                    alt="User Avatar"
                    sx={{
                        width: 100,
                        height: 100,
                        margin: "0 auto",
                        boxShadow: 2,
                    }}
                    src="https://via.placeholder.com/150"
                />
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{ marginTop: 1 }}
                >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Họ và Tên"
                        variant="outlined"
                        fullWidth
                        required
                        name="name"
                        value={name}
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{ width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type="date"
                        name="birthdate"
                        label="Ngày sinh"
                        variant="outlined"
                        onChange={handleChange}
                        value={formData.birthdate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="tel"
                        required
                        fullWidth
                        name="phone"
                        variant="outlined"
                        label="Số Điện Thoại"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        rows={3}
                        required
                        multiline
                        fullWidth
                        name="address"
                        label="Địa chỉ"
                        variant="outlined"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    marginTop: 4,
                }}
            >
                <Button onSubmit={handleUpdate} variant="contained" color="primary" size="large">
                    Lưu
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                    Hủy
                </Button>
            </Box>
        </Box>
    );
}
