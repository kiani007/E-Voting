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
  const id = 2;
  const candidate = data.find((item) => item.specialistTitle === id);
  const handleVoteCasted = () => {
    console.log('vote casted');
    navigate('/successfully-voted');
    return;
  };
  const handleCancel = () => {
    // navigate back
    console.log('cancel');
    navigate('/presidential-election');
  };
  return (
    <Box
      sx={{
        display: 'flex',
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
      <Grid item>
        <Button
          onClick={handleVoteCasted}
          sx={{ mt: 2, bgcolor: 'sucess.main' }}
        >
          Vote
        </Button>
        <Button onClick={handleCancel} sx={{ mt: 2, bgcolor: 'warning.main' }}>
          Cancel
        </Button>
      </Grid>
    </Box>
  );
};
export default PresidentialCandidates;
