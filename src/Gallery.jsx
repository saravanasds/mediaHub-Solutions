import { Box, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';


const Gallery = () => {
    const images = [
        'assets/slide1.png',
        'assets/slide2.png',
        'assets/slide3.png',
        'assets/slide4.png',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Box sx={{ bgcolor: '#331D00', pt: 3 }}>
            <Box
                width='100%'
                minHeight='100vh'
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='column'
                gap={10}
            >

                {/* title of the page */}
                <Box width='100%' display="flex" alignItems="center" justifyContent="center">
                    <Typography
                        align='center'
                        color='white'
                        fontSize='40px'
                        fontWeight='700'
                        width={320}
                        sx={{ borderBottom: '5px solid #FF9001', }}
                    >
                        Portfolio Gallery
                    </Typography>
                </Box>

                {/* slider section */}
                <Box
                    width='60%'
                    height='60vh' // Adjust height as needed
                    display="flex"
                    alignItems="flex-end"
                    justifyContent="center"
                    position='relative'
                    overflow='hidden'
                    boxShadow='3px 3px 40px #FF9001'
                    mb={10}
                >
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            style={{
                                display: index === currentSlide ? 'block' : 'none',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    ))}

                    {/* Explore button */}
                    <Button
                        sx={{
                            color: 'white',
                            bgcolor: '#FF9001',
                            fontSize: '30px',
                            fontWeight: '700',
                            width: '290px',
                            textDecoration: 'underline',
                            textTransform: 'capitalize',
                            borderRadius: '30px',
                            marginBottom: '70px',
                            '&:hover': {
                                bgcolor: '#FF9001', // Keep the same background color on hover
                                textDecoration: 'none', // Remove underline on hover
                            },
                        }}
                    >
                        Explore
                    </Button>

                </Box>
            </Box>
        </Box>
    );
}

export default Gallery;
