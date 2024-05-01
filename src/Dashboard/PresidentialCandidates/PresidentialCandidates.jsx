import {
  Avatar,
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Link,
  Container,
} from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useParams, useNavigate } from 'react-router';
import data from '../PresidentialElection/data.js';
export const PresidentialCandidates = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { candidateId } = params;
  const candidate = data.find(
    (item) => item.candidateId === Number(candidateId)
  );
  console.log('params', params);
  const handleVoteCasted = () => {
    console.log('vote casted');
    navigate('successfully-voted');
    return;
  };
  const handleCancel = () => {
    // navigate back
    console.log('cancel');
    navigate('/e-voting-system/presidential-election');
  };
  return (
    <Container
      sx={{
        textAlign: 'center',
        bgcolor: '#F8F9FA',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Avatar sx={{ m: 3, bgcolor: 'primary.main', width: 150, height: 150 }}>
        <img
          src={candidate.candidateImage}
          alt={candidate.candidateName}
          height={100}
          width={100}
        />
      </Avatar>
      <Typography
        variant="h1"
        sx={{ textAlign: 'center', color: 'primary.main' }}
      >
        {candidate.candidateName}
      </Typography>
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', mt: 2, color: 'warning.main' }}
      >
        {candidate.candidatePartyShort}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          onClick={handleVoteCasted}
          sx={{ bgcolor: 'primary.main', color: 'white', mr: 2 }}
        >
          Vote
        </Button>
        <Button
          sx={{ bgcolor: 'primary.main', color: 'white' }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
};
export default PresidentialCandidates;
