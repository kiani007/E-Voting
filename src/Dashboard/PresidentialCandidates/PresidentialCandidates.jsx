import {
  Avatar,
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Link,
  Container,
  FormControlLabel,
  Card,
  Icon,
  IconButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useParams, useNavigate } from 'react-router';
import data from '../PresidentialElection/data.js';
import Modal from '../../components/Modal';
import { getCandidateById, voteCandidate } from '../../services/dataService';
import { Image } from '@mui/icons-material';
import { Fingerprint } from '@mui/icons-material'; 
import { LuScanFace } from "react-icons/lu";
import { BackNavigation } from '../common/BackNavigation.jsx';
export const PresidentialCandidates = () => {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);
  const [isVoterAuthPage, setIsVoterAuthPage] = useState(false);
  const params = useParams();
  const { candidateId } = params;  
  const [fingerprintModalOpen, setFingerprintModalOpen] = React.useState(false);
  const [faceScannerModalOpen, setFaceScannerModalOpen] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Presidential Candidates';
  }, []);

  useEffect(() => {
    const getCandidate = async () => {
      try {
        const {candidate} = await getCandidateById(candidateId);
        setCandidate(candidate);
      } catch (error) {
        console.error('Error fetching candidate:', error);
      }
    };

      getCandidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVoteCasted = async () => {
    try {
      const { status, message } = await voteCandidate(candidateId);

      if (status !== 200) {
        console.error(message);
        return;
      }
      handleFingerPrintModalClose();
      navigate('successfully-voted');
      return;

    } catch (error) {
      alert('Error casting vote:', error);
    }
    
  };
  const handleCancel = () => {
    navigate(-1);
  };
  const voterAuthenticationPage = () => {
    setIsVoterAuthPage(true);
  }
  const handleFingerPrintModalOpen = () => {
    setFingerprintModalOpen(true);
  };
  const handleFingerPrintModalClose = () => {
    setFingerprintModalOpen(false);
  };
  const handleFaceScannerModalOpen = () => {
    setFaceScannerModalOpen(true);
  }
  const handleFaceScannerModalClose = () => {
    setFaceScannerModalOpen(false);
  }
 
  return (
    <>
      <BackNavigation />
      {isVoterAuthPage && (
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'grey.200', mt: 8 }}>
                Scan to Cast Vote
          </Typography>
      )}
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        textAlign: 'center',
        bgcolor: '#FFFFFF',
        display: 'flex',
        borderRadius: '10px',
        padding: '3rem',
      }}
    >
      {!isVoterAuthPage && candidate ? (
        <>
          <Avatar
            sx={{
              width: 200,
              height: 200,
              marginBottom: '20px',
            }}
            src={candidate.image}
          />
          <Typography
            variant="h1"
            sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}
          >
            {candidate.name}
          </Typography>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', mt: 2, color: 'warning.main' }}
          >
            {candidate.party_name}
          </Typography>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', mt: 2, color: 'primary.main' }}
          >
            {candidate.position}
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Button
              onClick={voterAuthenticationPage}
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
        </>
      ) : (
          <>
            <Grid container spacing={3} justifyContent="center" >
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 2, bgcolor: 'grey.200' }}>
                  <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Fingerprint Scanner
                  </Typography>
                  <IconButton
                    onClick={handleFingerPrintModalOpen}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 'auto',
                      width: '200px',
                      height: '200px',
                      mt: 2,
                      mb: 1,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: '20%',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    <Fingerprint  sx={{ width: '56%', height: '56%' }}/>
                  </IconButton>
                  <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 2 }}>
                    Please scan your fingerprint to validate your vote
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 2, bgcolor: 'grey.200' }}>
                  <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Face Scanner
                  </Typography>
                     <IconButton
                    onClick={handleFaceScannerModalOpen}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 'auto',
                      width: '200px',
                      height: '200px',
                      mt: 2,
                      mb: 1,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: '20%',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    <LuScanFace size={100} />
                   
                  </IconButton>
                  <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 2 }}>
                    Please scan your face to validate your vote
                  </Typography>
                </Card>
              </Grid>
            </Grid>

          </>
      )}
          
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
        {faceScannerModalOpen && (
        <Modal
          open={faceScannerModalOpen}
          handleClose={handleFaceScannerModalClose}
          title="Face Scanner"
          subTitle="Please scan your face"
          description="This will be used to validate your vote"
          buttonText="scan"
          buttonFunction={handleVoteCasted}
        />
      )}
      </Container>
    </>
  );
};
export default PresidentialCandidates;
