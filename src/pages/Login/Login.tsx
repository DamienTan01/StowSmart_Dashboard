import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UBLogo from "@/resources/images/logo.png";
import Image from "next/image";
import scss from "@/styles/Login.module.scss";
import { Box, InputAdornment, TextField, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import shadows from "@mui/material/styles/shadows";

const Login = () => {
    const { data: session } = useSession();
    const userProfileImg = session?.user?.image as string;

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <main className={scss.page}>
            {/* Logo and App Name */}
            <Box className={scss.topBar}>
                <Image
                    className={scss.logo}
                    src={UBLogo}
                    alt="UB Logo"
                />

                <h1 className={scss.appName}>Stowsmart RFID Cabinet Dashboard</h1>
            </Box>

            <Box className={scss.customBox}>
                {/* Title */}
                <h1 className={scss.loginTitleText}>Welcome Back!</h1>
                <p className={scss.loginSubText}>Welcome Back, Please Enter Your Details</p>

                {/* Form */}
                <Box className={scss.inputGroup}>
                    <TextField
                        id="email"
                        variant="outlined"
                        placeholder="Email Address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon className={scss.icon} />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '10px',
                                '& input': {
                                    fontSize: '18px', // Change input text size
                                },
                            },
                        }}

                        className={scss.emailField} // Add your custom styles here
                    />

                    <Box className={scss.forgotPassBox}>
                        <Button
                            className={scss.forgotPassBtn}
                            variant="text"
                            disableRipple
                        >
                            Forgot Password?
                        </Button>
                    </Box>

                    <TextField
                        id="password"
                        variant="outlined"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon className={scss.icon} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'hide the password' : 'display the password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '10px', // Make the TextField rounded
                                '& input': {
                                    fontSize: '18px', // Change input text size
                                },
                            },
                        }}
                        className={scss.passField} // Add your custom styles here
                    />
                </Box>

                <Box className={scss.centerBox}>
                    <Button
                        className={scss.loginBtn}
                        variant="contained"
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </main>
    )
};

export default Login;
