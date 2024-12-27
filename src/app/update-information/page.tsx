import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Avatar,
    IconButton
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function UpdateForm() {
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
                <Typography variant="caption" display="block">
                    Nhấn vào đây để thay ảnh
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Họ và Tên"
                        variant="outlined"
                        fullWidth
                        required
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Ngày sinh"
                        variant="outlined"
                        fullWidth
                        required
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Số Điện Thoại"
                        variant="outlined"
                        fullWidth
                        required
                        type="tel"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Địa chỉ"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={3}
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
                <Button variant="contained" color="primary" size="large">
                    Lưu
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                    Hủy
                </Button>
            </Box>
        </Box>
    );
}
