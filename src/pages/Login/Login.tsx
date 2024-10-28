import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UBLogo from "@/resources/images/logo.png";
import Image from "next/image";
import styles from "@/styles/Login.module.css";
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
        <main className={styles.page}>
            {/* Logo and App Name */}
            <Box className={styles.topBar}>
                <Image
                    className={styles.logo}
                    src={UBLogo}
                    alt="UB Logo"
                />

                <h1 className={styles.appName}>Stowsmart RFID Cabinet Dashboard</h1>
            </Box>

            <Box className={styles.customBox}>
                {/* Title */}
                <h1 className={styles.loginTitleText}>Welcome Back!</h1>
                <p className={styles.loginSubText}>Welcome Back, Please Enter Your Details</p>

                {/* Form */}
                <Box className={styles.inputGroup}>
                    <TextField
                        id="email"
                        variant="outlined"
                        placeholder="Email Address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon className={styles.icon} />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '10px',
                                '& input': {
                                    fontSize: '18px', // Change input text size
                                },
                            },
                        }}

                        className={styles.emailField} // Add your custom styles here
                    />

                    <Box className={styles.forgotPassBox}>
                        <Button
                            className={styles.forgotPassBtn}
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
                                    <PasswordIcon className={styles.icon} />
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
                        className={styles.passField} // Add your custom styles here
                    />
                </Box>

                <Box className={styles.centerBox}>
                    <Button
                        className={styles.loginBtn}
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
