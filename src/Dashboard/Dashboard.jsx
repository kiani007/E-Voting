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
import { useAuth } from '../Auth';

const CardItem = ({ title, subtitle, image, onClick }) => (
  <Grid item xs={12} sm={6}>
    <Card
      sx={{
        minHeight: '100%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: '10px', 
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: 'grey.300',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        },
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const cardData = [
    {
      title: 'President',
      subtitle: 'Campus Wise',
      image: vote,
      onClick: () => {
        user && user.is_authorized ? navigate('presidential-election') : alert("You Are not Authorized")
      },
    },
    {
      title: 'Vice President',
      subtitle: 'Campus Wise',
      image: vote,
      onClick: () => {
        user && user.is_authorized ? navigate('vice-presidential-eleciton') : alert("You Are not Authorized")
      },
    },
    // {
    //   title: 'Matrix Election',
    //   subtitle: 'Department Wise',
    //   image: vote,
    //   onClick: () => navigate('electorial-matrix'),
    // },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        paddingTop: '20px',
        borderRadius: '2rem',
        paddingBottom: '20px',
        scrollbarColor: 'red',
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
        <Typography variant="h5" align="center" sx={{ mt: 2, color: 'grey.300' }}>
          Simple Free and Fair Elections <br /> Now in Pakistan
        </Typography>
        <Grid container justifyContent="center" spacing={5} sx={{ mt: 6, mb: 4,   }}>
          <Grid item xs={12} lg={6} spacing={4}>
            <Grid container spacing={4}>
              {cardData.map((card, index) => (
                <CardItem
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  image={card.image}
                  onClick={card.onClick}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;