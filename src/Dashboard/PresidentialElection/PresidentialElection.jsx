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
import useIsMobile from '../../utils/hooks/useIsMobile.js';
const PresidentialElection = () => {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        padding: '20px',
        backgroundSize: '50px 50px',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography
            variant={isMobile ? 'h5' : 'h2'}
            align="center"
            gutterBottom
            sx={{
              mt: 4,
              fontWeight: 'bold',
              color: 'primary.main',
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
              bgcolor: 'white',
              p: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
              }}
            >
              General Election 2024
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ p: 4 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignContent={'center'}
            alignItems="center"
            margin={'0 auto'}
          >
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
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
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
