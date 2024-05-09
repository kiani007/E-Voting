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
import Modal from '../../components/Modal';
export const PresidentialCandidates = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { candidateId } = params;
  const [fingerprintModalOpen, setFingerprintModalOpen] = React.useState(false);
  const candidate = data.find(
    (item) => item.candidateId === Number(candidateId)
  );

  const handleVoteCasted = () => {
    console.log(candidateId);
    handleFingerPrintModalClose();
    navigate('successfully-voted');
    return;
  };
  const handleCancel = () => {
    navigate(-1);
  };
  const handleFingerPrintModalOpen = () => {
    setFingerprintModalOpen(true);
  };
  const handleFingerPrintModalClose = () => {
    setFingerprintModalOpen(false);
  };

  return (
    <Container
      sx={{
        textAlign: 'center',
        bgcolor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
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
        variant="h4"
        sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}
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
          onClick={handleFingerPrintModalOpen}
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            mr: 2,
            padding: '10px 30px',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Vote
        </Button>
        <Button
          sx={{
            bgcolor: 'error.main',
            color: 'white',
            mr: 2,
            padding: '10px 30px',
            '&:hover': {
              bgcolor: 'error.dark',
            },
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Box>
      {/* fingerprint modal */}
      {fingerprintModalOpen && (
        <Modal
          open={fingerprintModalOpen}
          handleClose={handleFingerPrintModalClose}
          title="Fingerprint"
          subTitle="Please scan your fingerprint"
          description="This will be used to validate your vote"
          buttonText="scan"
          buttonFunction={handleVoteCasted}
        />
      )}
    </Container>
  );
};
export default PresidentialCandidates;
