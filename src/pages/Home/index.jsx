import React from 'react';
import {
  Grid,
  Typography,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  SecurityRounded,
  ThumbUpAlt,
} from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import homeVote from '../../assets/homeVote.png';
import { HiCubeTransparent } from 'react-icons/hi';
import {
  RiAccountCircleLine,
  RiLoginBoxLine,
  RiUserSearchLine,
  RiCheckboxCircleLine,
  RiFileSearchLine,
  RiNotificationLine,
  RiUserStarLine,
} from 'react-icons/ri';

const index = () => {
  const styles = {
    mainSection: {
      padding: '10rem',
      backgroundColor: '#fffff',
      textAlign: 'left',
    },
    featureSection: {
      padding: '50px',
      backgroundColor: '#f0f0f0',
    },
    card: {
      padding: '3rem',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
    },
    flowSection: {
      padding: '50px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
    },
    faqSection: {
      padding: '50px',
      backgroundColor: '#f0f0f0',
    },
    accordion: {
      width: '100%',
    },
    contactSection: {
      padding: '50px',
      backgroundColor: '#ffffff',
    },
    featrueStepper: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#336766',
    },
    stepperIcons: {
      fontSize: '2rem',
      height: '2rem',
      color: '#336766',
    },
    stepperTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#336766',
    },
    stepperDescription: {
      fontSize: '0.8rem',
      paddingLeft: '2rem',
      color: '#336766',
    },
  };

  const features = [
    {
      title: 'Easy to Use',
      description: 'Intuitive interface for effortless voting experience',
      icon: ThumbUpAlt,
    },
    {
      title: 'Secure',
      description: 'Encrypted data transmission to ensure your vote is safe',
      icon: SecurityRounded,
    },
    {
      title: 'Transparent Results',
      description: 'Access transparent and real-time election results',
      icon: HiCubeTransparent,
    },
  ];

  const faqs = [
    {
      question: 'Is my vote secure?',
      answer: 'Yes, we use the latest encryption methods to secure your vote.',
    },
    {
      question: 'Can I change my vote?',
      answer: 'No, once you submit your vote, it cannot be changed.',
    },
    // Add more FAQs here
  ];

  const steps = [
    {
      label: 'Step 1: Register',
      description: 'Create an account to get started',
      icons: <RiAccountCircleLine style={styles.stepperIcons} />,
    },
    {
      label: 'Step 2: Login',
      description: 'Login to your account to start voting',
      icons: <RiLoginBoxLine />,
    },
    {
      label: 'Step 3: Vote',
      description: 'Vote for your favorite candidates',
      icons: <RiCheckboxCircleLine />,
    },
    {
      label: 'Step 4: Results',
      description: 'View the election results',
      icons: <RiFileSearchLine />,
    },
    {
      label: 'Step 5: Notifications',
      description: 'Get notified when your vote is successful',
      icons: <RiNotificationLine />,
    },
    {
      label: 'Step 6: Share',
      description: 'Share your vote with friends and family',
      icons: <RiUserStarLine />,
    },
    {
      label: 'Step 7: Vote Again',
      description: 'Vote for your favorite candidates again',
      icons: <RiUserSearchLine />,
    },
  ];

  return (
    <div>
      {/* Main Section */}
      <Grid
        container
        alignItems="center"
        textAlign={'start'}
        justify="start"
        sx={{ p: 10 }}
        style={styles.mainSection}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxWidth: '300px',
          }}
        >
          <Typography
            component="h1"
            gutterBottom
            variant="h1"
            sx={{
              fontWeight: 'bold',
            }}
          >
            VOTE ONLINE AND STOP BEING IN A QUEUE
          </Typography>
          <TypeAnimation
            sequence={[
              'VOTE ONLINE AND STOP BEING IN A QUEUE',
              2000,
              'VOTE CONVENIENTLY FROM ANYWHERE WITH OUR E-VOTING SYSTEM',
              1000,
            ]}
            cursor={true}
            speed={5}
            repeat={5}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Your animated infographic or lottie image here */}
          <img src={homeVote} alt="Animated image" style={{ width: '100%' }} />
        </Grid>
      </Grid>

      {/* Feature Section */}
      <Grid
        container
        style={styles.featureSection}
        spacing={4}
        justify="center"
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={styles.card}>
              <Avatar sx={{ bgcolor: 'primary.main', p: 2, m: 'auto' }}>
                <feature.icon style={{ fontSize: '3rem' }} />
              </Avatar>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', p: 2, textAlign: 'center' }}
                gutterBottom
              >
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Application Flow Section */}
      <Grid
        container
        style={styles.flowSection}
        justify="center"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h4" gutterBottom>
          Application Flow
        </Typography>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step completed={true} key={index}>
              <StepLabel icon={step.icons} style={styles.featrueStepper}>
                <Typography variant="body1" sx={styles.stepperTitle}>
                  {step.label}
                </Typography>
              </StepLabel>
              <Typography variant="body2" style={styles.stepperDescription}>
                {step.description}
              </Typography>
            </Step>
          ))}
        </Stepper>
      </Grid>

      {/* FAQs Section */}
      <Grid container style={styles.faqSection} justify="center">
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} style={styles.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      {/* Contact Us Section */}
      <Grid container style={styles.contactSection} justify="center">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Grid item xs={12} sm={6}>
          <TextField label="Your Name" fullWidth margin="normal" />
          <TextField label="Your Email" fullWidth margin="normal" />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
