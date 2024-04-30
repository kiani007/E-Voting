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
import pti from '../../assets/Pti.png';
import pml from '../../assets/pml.jpg';
import presidentialCandidatesData from './data';
import vote from '../../assets/vote-img.png';

const Index = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={12}
          sx={{ textAlign: 'center', bgcolor: 'primary.main' }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mt: 4,
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            Presidential Candidates
          </Typography>
          <Box
            bgcolor={'gray'}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 4,
              mb: 4,
              margin: '0 auto',
              bgcolor: 'white',
              p: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
            >
              General Election 2024
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            p: 4,
            m: 6,
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          <Grid container lg={12} spacing={2} justifyContent="center">
            {presidentialCandidatesData.map((candidate) => (
              <Grid item key={candidate.candidateId} lg={3} sx={{ p: 2 }}>
                <Link
                  to={`/candidate/${candidate.candidateId}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Card sx={{ maxWidth: 345, p: 4 }}>
                    <CardMedia
                      paddingTop="56.25%"
                      component="img"
                      height="350"
                      width={'350'}
                      image={candidate.candidateImage}
                      alt={candidate.candidateName}
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

export default Index;
