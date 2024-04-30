import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import vote from '../assets/vote-img.png';
const Dashboard = () => {
  const navigate = useNavigate();
  const handleVicePresidentElection = () => {
    // return navigate("/vice-presidentElection");
  };
  const handlePresidentElection = () => {
    console.log('handlePresidentElection');
    navigate('/presidential-election');
  };
  return (
    <Grid
      container
      height={'100vh'}
      sx={{ justifyContent: 'center', bgcolor: '#f5f5f5' }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mt: 4,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'primary.main',
          }}
        >
          Election 2023
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Simple Free and Fair Elections <br /> Now in Pakistan
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gridGap: '15px',
            padding: '15px',
          }}
        >
          <Card
            sx={{
              minHeight: '100%',
              backdropFilter: 'blur(5px)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={handlePresidentElection}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={vote}
                alt="Voice President"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  President
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Campus Wise
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              minHeight: '100%',
              backdropFilter: 'blur(5px)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={handleVicePresidentElection}
          >
            <CardActionArea>
              <CardMedia
                bgcolor="primary.main"
                component="img"
                height="100%"
                image={vote}
                alt="Voice President"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vice President
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Campus Wise
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
export default index;
