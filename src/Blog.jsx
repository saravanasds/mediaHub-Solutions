import { Box, Typography, useMediaQuery, useTheme, } from '@mui/material';
import React from 'react';

const Blog = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box
            sx={{ border: '1px solid #FF9001', bgcolor: '#331D00', pt: 3 }}
        >
            <Box
                width='100%'
                minHeight='100vh'
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='column'
                gap={isMdDown ? 3 : 7}  // Reduce gap on smaller screens
            >

                {/* title of the page */}
                <Box width='100%' display="flex" alignItems="center" justifyContent="center">
                    <Typography
                        align='center'
                        color='white'
                        fontSize='40px'
                        fontWeight='700'
                        width={250}
                        sx={{ borderBottom: '5px solid #FF9001' }}
                    >
                        Blog & News
                    </Typography>
                </Box>

                <Box
                    width='90%'
                    minHeigh={480}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection='column'
                    gap={isMdDown ? 4 : 8}  // Adjust gap for smaller screens
                    mb={8}
                >
                    <Box
                        width='100%'
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection={isLgDown ? 'column' : 'row'}  // Change direction on smaller screens
                        gap={isMdDown ? 4 : 8}  // Adjust gap for smaller screens
                    >

                        {/* left side of the page */}
                        <Box
                            width={isMdDown ? '100%' : '60%'}  // Adjust width for smaller screens
                            display="flex"
                            alignItems="center"
                            justifyContent={isMdDown ? 'center' : 'space-between'}  // Center content on smaller screens
                            flexDirection='column'
                            textAlign={isLgDown ? 'center' : 'left'}  // Center text on smaller screens
                            gap={3}
                        >
                            {/* big image */}
                            <img src="assets/blogbig.jpeg" alt="" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />

                            <Box>
                                <Typography
                                    color='white'
                                    fontSize='28px'
                                    fontWeight='700'
                                >
                                    Epic Chronicles: Cosmic Convergence
                                </Typography>

                                <Typography
                                    color='white'
                                    fontSize='20px'
                                    fontWeight='300'
                                    pr={isLgDown ? 0 : 10}
                                >
                                    Join our Marvel heroes in an animated odyssey as they unite against cosmic threats, unravel secrets, and forge alliances to save the multiverse from impending chaos.
                                </Typography>
                            </Box>
                        </Box>

                        {/* right side of the page */}
                        <Box
                            width={isMdDown ? '100%' : '45%'}  // Adjust width for smaller screens
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            flexDirection='column'
                            gap={5}  // Adjust gap for smaller screens
                        >

                            {/* spider man box */}
                            <Box
                                width='100%'
                                height={123}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p='3px'
                                gap={1}
                                sx={{ border: '0.5px solid #FF9001', bgcolor: '#5C3400', borderRadius: '10px', boxShadow: '6px 6px 4px #FF9001 ' }}
                            >
                                <img src="assets/blog1.png" alt="" style={{ width: '30%', height: '121px', objectFit: 'cover' }} />
                                <Box width='70%'>
                                    <Typography
                                        color='white'
                                        fontSize='12px'
                                        fontWeight='700'
                                    >
                                        Spider man
                                        <Typography
                                            color='white'
                                            fontSize='12px'
                                            fontWeight='300'
                                            my='4px'
                                        >
                                            Spider-Man swings through skyscrapers, battling villains with acrobatic finesse and witty banter, while navigating the challenges of dual identities and responsibilities in New York City's chaos.
                                        </Typography>

                                        <Typography
                                            color='white'
                                            fontSize='12px'
                                            fontWeight='600'
                                            sx={{ opacity: 0.5 }}
                                        >
                                            publication date : 12/09/2023
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>

                            {/* end game box */}
                            <Box
                                width='100%'
                                height={123}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p='3px'
                                gap={1}
                                sx={{ border: '0.5px solid #FF9001', bgcolor: '#5C3400', borderRadius: '10px', boxShadow: '6px 6px 4px #FF9001 ' }}
                            >
                                <img src="assets/blog2.png" alt="" style={{ width: '30%', height: '121px', objectFit: 'cover' }} />
                                <Box width='70%'>
                                    <Typography
                                        color='white'
                                        fontSize='12px'
                                        fontWeight='700'
                                    >
                                        End game
                                        <Typography
                                            color='white'
                                            fontSize='12px'
                                            fontWeight='300'
                                            my='4px'
                                        >
                                            Marvel's 'Avengers: Endgame' marks the ultimate showdown as heroes confront destiny, sacrifice, and the formidable Thanos in an epic battle for the universe's fate.
                                        </Typography>

                                        <Typography
                                            color='white'
                                            fontSize='12px'
                                            fontWeight='600'
                                            sx={{ opacity: 0.5 }}
                                        >
                                            publication date : 14/10/2023
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>

                            {/* iron man box */}
                            <Box
                                width='100%'
                                height={123}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p='3px'
                                gap={1}
                                sx={{ border: '0.5px solid #FF9001', bgcolor: '#5C3400', borderRadius: '10px', boxShadow: '6px 6px 4px #FF9001 ' }}
                            >
                                <img src="assets/blog3.jpeg" alt="" style={{ width: '30%', height: '121px', objectFit: 'cover' }} />
                                <Box width='70%'>
                                    <Typography
                                        color='white'
                                        fontSize='12px'
                                        fontWeight='700'
                                    >
                                        Iron man
                                        <Typography
                                            color='white'
                                            fontSize='12px'
                                            fontWeight='300'
                                            my='4px'
                                        >
                                            Iron Man, billionaire genius Tony Stark, transforms into a high-tech superhero, battling villains and navigating the complexities of power and responsibility in Marvel's iconic saga.
                                        </Typography>

                                        <Typography
                                            color='white'
                                            fontSize='12px'
                                            fontWeight='600'
                                            sx={{ opacity: 0.5 }}
                                        >
                                            publication date : 2/11/2023
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default Blog;
