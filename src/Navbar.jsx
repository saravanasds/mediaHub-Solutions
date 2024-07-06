import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

const pages = [
    { name: 'Services', to: 'services' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Blog', to: 'blog' },
    { name: 'Team', to: 'team' },
    { name: 'Contact', to: 'contact' }
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ height: { xs: 70, md: 100 }, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.9)' }}>
            <Container maxWidth={false} disableGutters>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#EF8701', height: { xs: 70, md: 100 }, px: { xs: 2, md: 10 } }}>

                    {/* Left Side (Menu Icon on Mobile) */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ width: '40px', height: '40px' }} />
                        </IconButton>
                    </Box>

                    {/* Center Logo */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexGrow: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        <img src="assets/logo.png" alt="logo"
                            style={{
                                height: '45px', // Adjust the height as needed
                                width: '70px', // Maintain aspect ratio
                            }} />
                    </Box>

                    {/* Left Side (Logo on Desktop) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src="assets/logo.png" alt="logo"
                            style={{
                                marginRight: '8px',
                                height: '69px', // Adjust the height as needed
                                width: '96px', // Maintain aspect ratio
                            }} />
                    </Box>

                    {/* Center Navigation (Desktop) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1, gap: 4 }}>
                        {pages.map((page) => (
                            <ScrollLink
                                key={page.name}
                                to={page.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={handleCloseNavMenu}
                            >
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 600, textTransform: 'capitalize', fontSize: '18px' }}
                                >
                                    {page.name}
                                </Button>
                            </ScrollLink>
                        ))}
                    </Box>

                    {/* Right Side Icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: 40, md: 50 }, width: { xs: 40, md: 50 }, bgcolor: '#D9D9D9', marginRight: { xs: "12px", sm: '24px' }, borderRadius: '50%' }}>
                            <FaPhoneAlt style={{ color: 'black', width: 25, height: 25 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: 40, md: 50 }, width: { xs: 40, md: 50 }, bgcolor: '#D9D9D9', borderRadius: '50%' }}>
                            <FaWhatsapp style={{ color: 'black', width: 25, height: 25 }} />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>


            {/* Responsive Navigation Links */}
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map((page) => (
                    <ScrollLink
                        key={page.name}
                        to={page.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleCloseNavMenu}
                    >
                        <MenuItem>
                            <Typography textAlign="center" color='black'>{page.name}</Typography>
                        </MenuItem>
                    </ScrollLink>
                ))}
            </Menu>
        </AppBar>
    );
}

export default ResponsiveAppBar;
