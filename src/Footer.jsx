import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FaFacebook, FaInstagramSquare, FaMailBulk, FaRocket } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import React from 'react';

const Footer = () => {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ bgcolor: "#703F00",overflowX:'hidden' }}>
            <Box
                minHeight='626px'
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                position="relative"
            >

                {/* background word map image */}
                <img src="assets/world-map.png" alt="" style={{ position: 'absolute' }} />

                {/* content section */}
                <Box
                    minHeight="490px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection={isMdUp ? "row" : "column"}
                    sx={{ background: "rgba(0,0,0,0.3)" }}
                >
                    <Box display="flex" justifyContent="center" flexDirection={isMdUp ? "row" : "column"} gap={isMdUp ? 14 : 4} p={isSmUp ? 4 : 8}>

                        {/* address colomn */}
                        <Box mb={isMdUp ? 0 : 4} textAlign={isMdUp ? "left" : "center"}>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection={isMdUp ? "row" : "column"}
                                justifyContent={isMdUp ? "left" : "center"}
                                gap={2}
                                mb={3}
                            >
                                <img src="assets/logo.png" alt="" width="63px" height="48px" />
                                <Typography color="white" fontSize="33px" fontWeight="700">
                                    MediaHub Solutions.
                                </Typography>
                            </Box>

                            <Typography color="white" fontSize="30px" fontWeight="400" mb={3}>
                                Anogaa Ltd | 124 City <br /> Road, London, EC1V 2NX
                            </Typography>

                            <Box textAlign={isMdUp ? "left" : "center"}>
                                <FaFacebook style={{ width: "31px", height: "31px", color: 'white', marginRight: '14px' }} />
                                <FaSquarePhone style={{ width: "31px", height: "31px", color: 'white', marginRight: '14px' }} />
                                <FaInstagramSquare style={{ width: "31px", height: "31px", color: 'white', marginRight: '14px' }} />
                                <FaMailBulk style={{ width: "31px", height: "31px", color: 'white' }} />
                            </Box>
                        </Box>

                        {/* usefull links colomn */}
                        <Box
                            color="white"
                            fontSize="30px"
                            fontWeight="400"
                            display="flex"
                            flexDirection="column"
                            gap={1}
                            mb={isMdUp ? 0 : 4}
                            textAlign={isMdUp ? "left" : "center"}
                        >
                            <Typography color="white" fontSize="33px" fontWeight="700" mb={2}>
                                Useful Links
                            </Typography>
                            <a href="">Services</a>
                            <a href="">Gallery</a>
                            <a href="">Blog</a>
                            <a href="">Team</a>
                            <a href="">Contact Us</a>
                        </Box>


                        {/* subscription colomn */}
                        <Box textAlign={isMdUp ? "left" : "center"}>
                            <Typography color="white" fontSize="33px" fontWeight="700" mb={2}>
                                Subscription
                            </Typography>
                            <Typography color="white" fontSize="30px" fontWeight="400" mb={2}>
                                Unlock premium content with<br /> subscription.
                            </Typography>

                            {/* subscription send input field */}
                            <Box
                                sx={{
                                    height: '64px',
                                    bgcolor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {/* input box */}
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            height: '64px',
                                            border: 'none',
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        width: '70%',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                            '&:hover fieldset': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                />

                                {/* send button */}
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: '64px',
                                        width: '30%',
                                        bgcolor: '#EF8701',
                                        color: 'white',
                                        fontSize: '20px',
                                        fontWeight: '400',
                                        textTransform: 'capitalize',
                                        borderRadius: '0 20px 20px 0',
                                        gap: 1,
                                        '&:hover': {
                                            bgcolor: '#EF8701',
                                        },
                                    }}
                                >
                                    Send <FaRocket />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* copyright section */}
                <Box
                    minHeight="136px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography color="white" fontSize="20px" px={6} textAlign='center'>
                        Copyright © All rights reserved by MediaHub Solutions.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
