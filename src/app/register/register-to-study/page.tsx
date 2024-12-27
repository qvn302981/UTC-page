import React from 'react';
import {
    Container,
    TextField,
    Typography,
    Button,
    MenuItem,
    Box,
    Grid,
} from '@mui/material';

export default function DangKyHoc() {
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Đăng Ký Học
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    {/* Họ và Tên */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Họ và tên"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    {/* Email */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    {/* Số điện thoại */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Số điện thoại"
                            type="tel"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    {/* Khóa học */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Khóa học"
                            select
                            variant="outlined"
                            required
                        >
                            <MenuItem value="course1">Khóa học 1</MenuItem>
                            <MenuItem value="course2">Khóa học 2</MenuItem>
                            <MenuItem value="course3">Khóa học 3</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                {/* Nút Đăng ký */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Đăng Ký
                </Button>
            </Box>
        </Container>
    );
}
