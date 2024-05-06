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

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleVicePresidentElection = () => {
    navigate('vice-presidential-eleciton');
  };

  const handlePresidentElection = () => {
    navigate('presidential-election');
  };

  const handleMatrixElection = () => {
    navigate('electorial-matrix');
  };

  return (
    <Box
      sx={{
        backgroundColor: 'hsl(116.32deg 100% 88.95% / 76%)',
        minHeight: '100vh',
        paddingTop: '20px',
        borderRadius: '2rem',
        paddingBottom: '20px',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mt: 4,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'white.main',
          }}
        >
          Election 2023
        </Typography>
        <Typography variant="h5" align="center" sx={{ mt: 2 }}>
          Simple Free and Fair Elections <br /> Now in Pakistan
        </Typography>
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    minHeight: '100%',
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
                      height="200"
                      image={vote}
                      alt="President"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    minHeight: '100%',
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
                      component="img"
                      height="200"
                      image={vote}
                      alt="Vice President"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    minHeight: '100%',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  onClick={handleMatrixElection}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={vote}
                      alt="Results"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        SEE RESULT
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Who is Leading
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
