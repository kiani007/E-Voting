import React from 'react';
import { Avatar, Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
export const SuccessfullyVoted = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        bgcolor: '#F8F9FA',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 3, bgcolor: 'primary.main', width: 150, height: 150 }}>
        {/* mui icon tick */}
        <CheckIcon />
      </Avatar>

      <Typography
        variant="h6"
        sx={{ textAlign: 'center', color: 'primary.main' }}
      >
        You Have Cast Your Voted Successfully!
      </Typography>
      <Typography variant="Body1">
        Thanks for being a Responsiple citizen
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button>
          <Link
            to="/e-voting-system
          "
          >
            Go Back
          </Link>
        </Button>
      </Box>
    </Container>
  );
};
export default SuccessfullyVoted;
