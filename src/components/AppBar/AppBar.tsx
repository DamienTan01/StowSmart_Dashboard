import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import styles from "@/styles/AppBar.module.scss";
import UBLogo from "@/resources/images/logo.png";
import { signIn, signOut, useSession } from "next-auth/react";

const pages = ['Dashboard', 'Pricing', 'Blog'];
const settings = ['Profile', 'Settings', 'Logout'];

function ResponsiveAppBar() {
    const { data: session } = useSession();
    const userProfileImg = session?.user?.image as string;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Toolbar className={styles.topBar}>
                <Image
                    className={styles.logo}
                    src={UBLogo}
                    alt="UB Logo"
                />

                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    className={styles.appName}
                >
                    StowSmart RFID Cabinet Dashboard
                </Typography>
                
                {/* <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={session?.user?.name as string} src={userProfileImg} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={() => session ? signOut() : signIn()}>
                            <Typography sx={{ textAlign: 'center' }}>{session ? 'Logout' : 'Login'}</Typography>
                        </MenuItem>
                    </Menu>
                </Box> */}
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
