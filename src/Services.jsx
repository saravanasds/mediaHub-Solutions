import { Box, Typography } from '@mui/material'
import { FaFilePen, FaPhotoFilm, FaRectangleList } from "react-icons/fa6";
import React from 'react'

const Services = () => {
    return (
        <Box>
            <Box
                width='100%'
                minHeight='100vh'
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                flexDirection='column'
                gap={14}
                py={6}
            >

                {/* title of the page */}
                <Box width='100%' display="flex" alignItems="center" justifyContent="center">
                    <Typography
                        align='center'
                        color='white'
                        fontSize='40px'
                        fontWeight='700'
                        width={160}
                        sx={{ borderBottom: '5px solid #FF9001' }}
                    >
                        Services
                    </Typography>
                </Box>


                {/* content of the page */}
                <Box
                    width='90%'
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap='wrap'
                    gap={10}
                >


                    {/* 1st box */}
                    <Box
                        width='373px'
                        sx={{
                            border: '1px solid #FF9001',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: '3px 3px 40px #FF9001'
                            },
                        }}
                    >
                        {/* box heading */}
                        <Typography
                            textAlign='center'
                            color='white'
                            fontSize='23px'
                            fontWeight='700'
                            bgcolor='#FF9001'
                            p={4}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={1}
                            >
                                <FaFilePen style={{ width: '31px', height: '28px' }} />
                                Content Creation
                            </Box>
                        </Typography>

                        {/* box content */}
                        <Typography
                            textAlign='center'
                            color='white'
                            fontSize='20px'
                            fontWeight='400'
                            fontFamily='"inter", sans-serif'
                            p={4}
                        >
                            Content creation is the art of crafting compelling, valuable, and relevant material across various media platforms to engage and inform audiences effectively.
                        </Typography>
                    </Box>


                    {/* 2nd box */}
                    <Box
                        width='373px'
                        sx={{
                            border: '1px solid #FF9001',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: '3px 3px 40px #FF9001'
                            },
                        }}
                    >
                        {/* box heading */}
                        <Typography
                            textAlign='center'
                            color='white'
                            fontSize='23px'
                            fontWeight='700'
                            bgcolor='#FF9001'
                            p={4}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={2}
                            >
                                <FaPhotoFilm style={{ width: '31px', height: '28px' }} />
                                Video Production
                            </Box>
                        </Typography>

                        {/* box content */}
                        <Typography
                            textAlign='center'
                            color='white'
                            fontSize='20px'
                            fontWeight='400'
                            fontFamily='"inter", sans-serif'
                            p={4}
                        >
                            Video production involves planning, shooting, and editing visual content. It combines storytelling and technical skills to convey messages creatively and effectively.
                        </Typography>
                    </Box>


                    {/* 3rd box */}
                    <Box
                        width='373px'
                        sx={{
                            border: '1px solid #FF9001',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: '3px 3px 40px #FF9001'
                            },
                        }}
                    >
                        {/* box heading */}
                        <Typography
                            textAlign='center'
                            color='white'
                            fontSize='23px'
                            fontWeight='700'
                            bgcolor='#FF9001'
                            p={4}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={1}
                            >
                                <FaRectangleList style={{ width: '31px', height: '28px' }} />
                                Multimedia Storytelling
                            </Box>
                        </Typography>

                        {/* box content */}
                        <Typography
                            textAlign='center'
                            color='white'
                            fontSize='20px'
                            fontWeight='400'
                            fontFamily='"inter", sans-serif'
                            p={4}
                        >
                            Multimedia storytelling weaves a narrative through diverse media, combining text, images, audio, and video to create a rich and immersive storytelling experience.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Services