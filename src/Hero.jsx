import { Box, Button, Stack, Typography, useMediaQuery, useTheme, } from '@mui/material';
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import bgBanner from '../public/assets/banner.gif'

const Hero = () => {

    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box
            width='100%'
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundImage: `url(${bgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover", }}
        >
            <Stack
                minHeight={`calc(100vh - 100px)`}
                width="90%"
                display='flex'
                alignItems="center"
                justifyContent="center"
                flexDirection={isLgDown ? "column" : "row"}
                direction="row"
                gap={isLgDown ? 8 : 18}
                py={isLgDown ? 10 : 2}
            >

                {/* Left side content */}
                <Box
                    width={isLgDown ? "90%" : "45%"}
                >
                    <Box>
                        <Typography color="white" mb={4} sx={{ fontSize: "40px" }}>MediaHub Solutions</Typography>
                        <Typography color="white" mb={3} sx={{ fontSize: "17px", lineHeight: '25px', fontFamily: '"Poppins", sans-serif' }}>
                            We are a leading company specializing in content creation, video production, and multimedia storytelling. Our innovative media solutions ensure enhanced brand visibility and engagement. Elevate your online presence with us!
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                width: "177px",
                                height: "64px",
                                borderRadius: "30px",
                                bgcolor: "#EF8701",
                                fontSize: "20px",
                                textTransform: "capitalize",
                                border: '1px solid black',
                                '&:hover': { backgroundColor: '#EF8701' }, // Adjust hover styles here
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>

                {/* Right side content box */}
                <Box
                    width={isLgDown ? "90%" : "55%"}
                    sx={{ border: '1px solid #EF8701', width: 'auto', height: 'auto', borderRadius: "23px", background: "rgba(0,0,0,0.7)" }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography color="white" px={3} py={4} sx={{ fontSize: "23px", fontWeight: "700" }}>Top Trending Projects</Typography>
                        <Box>
                            <FaArrowAltCircleLeft color='white' style={{ width: "30px", height: "30px", marginRight: "40px" }} />
                            <FaArrowAltCircleRight color='white' style={{ width: "30px", height: "30px", marginRight: "25px" }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: isMdDown ? 2 : 7, px: 3, pb: 6, flexDirection: isMdDown ? 'column' : 'row' }}>
                        <img src="assets/pic1.jpeg" alt="" style={{ width: '145px', height: '215px' }} />
                        <img src="assets/pic2.jpeg" alt="" style={{ width: '145px', height: '215px' }} />
                        <img src="assets/pic3.png" alt="" style={{ width: '145px', height: '215px' }} />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Hero;
