import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Link,
  Button,
} from '@mui/material';
import { Header } from '../../layout';
import { vicePresidentialCandidates } from './data.js';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
export const VicePresidentialElection = () => {
  const navigate = useNavigate();
  const handleVoteCasted = (candidateId) => () => {
    console.log(candidateId);
    navigate(`${candidateId}`);
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mb: 20,
          bgcolor: '#F8F9FA',
          padding: '2rem',
          borderRadius: '10px',
        }}
      >
        {/* select the candidate by clicking on the Card */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Vice Presidential Election
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            Select the Candidate
          </Typography>
          <Grid container spacing={4}>
            {/* Candidate Card map here so that it will select and route to the other page */}
            {vicePresidentialCandidates.map((candidate) => (
              <Grid item xs={12} md={6} lg={4} key={candidate.candidateId}>
                <Card onClick={handleVoteCasted(candidate.candidateId)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/200/300"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {candidate.candidateName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {candidate.candidatePosition}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default VicePresidentialElection;
