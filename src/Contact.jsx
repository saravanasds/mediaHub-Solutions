import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Custom theme for the text fields
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          marginBottom: '25px',
          padding: '3px',
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
          '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
            fontSize: '24px',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
        },
      },
    },
  },
});

// StyledTextField component to reuse styles
const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#331D00', // Background color applied here
  borderRadius: '30px',
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
  '& .MuiInputBase-input::placeholder': {
    color: 'white',
    opacity: 1,
    fontSize: '24px',
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontSize: '24px',
  },
}));

const Contact = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360977185!2d-74.30933341658171!3d40.69753995848721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1720144339136!5m2!1sen!2sin";

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 12 }}>

        {/* title of the page */}
        <Box width='100%' display="flex" alignItems="center" justifyContent="center">
          <Typography
            align='center'
            color='white'
            fontSize='40px'
            fontWeight='700'
            mb={4}
            width={220}
            sx={{ borderBottom: '5px solid #FF9001' }}
          >
            Contact Us
          </Typography>
        </Box>

        <Box
          width='100%'
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ xs: 'column', md: 'row' }} // Responsive layout change
          gap={10}
        >

          {/* left side form input section */}
          <Box
            width={{ xs: '90%', md: '37%' }} // Responsive width
            height='490px'
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{ p: 3 }}
          >
            <StyledTextField fullWidth placeholder='Name' />
            <StyledTextField fullWidth placeholder='Phone' />
            <StyledTextField fullWidth placeholder='Email' />
            <StyledTextField fullWidth placeholder='Message' multiline rows={6} />
          </Box>

          {/* right side map section */}
          <Box
            width={{ xs: '90%', md: '45%' }} // Responsive width
            height='490px'
            mt={{ xs: 4, md: 0 }} // Margin top for mobile view
          >
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '30px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
