import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import presidentialCandidatesData from './data.js';

const PresidentialElection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        minHeight: '100vh',
        padding: '20px',
        backgroundImage:
          'linear-gradient(135deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.1) 50%, rgba(255,255,255,.1) 75%, transparent 75%, transparent)',
        backgroundSize: '50px 50px',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mt: 4,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 8px black',
              textTransform: 'uppercase',
            }}
          >
            Presidential Candidates
          </Typography>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 4,
              mb: 4,
              bgcolor: 'white',
              p: 2,
              boxShadow: '0 0 10px 5px rgba(0,0,0,0.2)',
              animation: `${shine} 10s linear infinite`,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'primary.main',
                textShadow: '2px 2px 8px black',
              }}
            >
              General Election 2024
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '10px',
                background:
                  'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
                borderRadius: '10px',
                mb: 2,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ p: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            {presidentialCandidatesData.map((candidate) => (
              <Grid
                item
                key={candidate.candidateId}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <Link
                  to={`${candidate.candidateId}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      boxShadow: '0 0 10px 5px rgba(0,0,0,0.2)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      padding: '10px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={candidate.candidateImage}
                      alt={candidate.candidateName}
                      sx={{
                        display: 'flex',
                        aspectRatio: '1',
                        width: '40%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {candidate.candidateName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {candidate.candidateParty}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PresidentialElection;

const shine = {
  '0%': {
    backgroundPosition: '0% 0%',
  },
  '100%': {
    backgroundPosition: '-100% 0%',
  },
};

const shake = {
  '0%': {
    transform: 'translate(0)',
  },
  '10%': {
    transform: 'translate(10px, 0)',
  },
  '20%': {
    transform: 'translate(-10px, 0)',
  },
  '30%': {
    transform: 'translate(10px, 0)',
  },
  '40%': {
    transform: 'translate(-10px, 0)',
  },
  '50%': {
    transform: 'translate(10px, 0)',
  },
  '60%': {
    transform: 'translate(-10px, 0)',
  },
  '70%': {
    transform: 'translate(10px, 0)',
  },
  '80%': {
    transform: 'translate(-10px, 0)',
  },
  '90%': {
    transform: 'translate(10px, 0)',
  },
  '100%': {
    transform: 'translate(0)',
  },
};
