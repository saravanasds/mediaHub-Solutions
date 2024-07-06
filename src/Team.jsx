import { Box, Typography, } from '@mui/material';
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaMailBulk, FaRocket } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Team = () => {

    const members = [
        {
            name: 'Henry',
            role: 'CEO',
            Image: 'assets/mem1.png'
        },
        {
            name: 'William',
            role: 'Story Script Writter',
            Image: 'assets/mem2.png'
        },
        {
            name: 'Jack',
            role: 'Vfx Artist',
            Image: 'assets/mem3.png'
        },
        {
            name: 'Charlie',
            role: 'Content Creater',
            Image: 'assets/mem4.png'
        }
    ];

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
                        width={180}
                        sx={{ borderBottom: '5px solid #FF9001' }}
                    >
                        Our Team
                    </Typography>
                </Box>

                {/* team members section */}
                <Box
                    width='100%'
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        width='100%'
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap='wrap'
                        gap={6}
                    >
                        {members.map((member) => (
                            <Box
                                position='relative'
                            >
                                <img src={member.Image} alt="" style={{ width: '289px', height: '338px', objectFit: 'cover', borderRadius: '0px 50px 0px 50px' }}/>
                                <Box
                                    width='100%'
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {/* name */}
                                    <Typography
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        color='white'
                                        width={205}
                                        height={48}
                                        position='absolute'
                                        sx={{
                                            border: '1px solid #FF9001',
                                            borderRadius: '13px',
                                            bgcolor: `rgba(9, 0, 24, 0.85)`,
                                            marginTop: '-120px'
                                        }}
                                    >
                                        {member.name}
                                    </Typography>
                                </Box>

                                {/* role */}
                                <Typography
                                    color='white'
                                    textAlign='center'
                                    fontSize='22px'
                                    fontWeight='700'
                                    p={1}
                                >
                                    {member.role}
                                </Typography>

                                {/* icons */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <FaFacebook style={{ width: "31px", height: "31px", color: 'white', marginRight: '14px' }} />
                                    <FaSquarePhone style={{ width: "31px", height: "31px", color: 'white', marginRight: '14px' }} />
                                    <FaInstagramSquare style={{ width: "31px", height: "31px", color: 'white', marginRight: '14px' }} />
                                    <FaMailBulk style={{ width: "31px", height: "31px", color: 'white' }} />
                                </Box>
                            </Box>
                        ))}

                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default Team