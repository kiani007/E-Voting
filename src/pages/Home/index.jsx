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
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const index = () => {
  const styles = {
    mainSection: {
      padding: '50px',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
    },
    featureSection: {
      padding: '50px',
      backgroundColor: '#ffffff',
    },
    card: {
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    flowSection: {
      padding: '50px',
      backgroundColor: '#f0f0f0',
    },
    faqSection: {
      padding: '50px',
      backgroundColor: '#ffffff',
    },
    accordion: {
      width: '100%',
    },
    contactSection: {
      padding: '50px',
      backgroundColor: '#f0f0f0',
    },
  };

  const features = [
    {
      title: 'Easy to Use',
      description: 'Intuitive interface for effortless voting experience',
    },
    {
      title: 'Secure',
      description: 'Encrypted data transmission to ensure your vote is safe',
    },
    {
      title: 'Transparent Results',
      description: 'Access transparent and real-time election results',
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

  return (
    <div>
      {/* Main Section */}
      <Grid
        container
        alignItems="center"
        justify="center"
        style={styles.mainSection}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Vote online and stop being in a queue
          </Typography>
          <Typography variant="body1" gutterBottom>
            Say goodbye to long queues. Vote conveniently from anywhere with our
            e-voting system.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Your animated infographic or lottie image here */}
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
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Application Flow Section */}
      <Grid container style={styles.flowSection} justify="center">
        {/* Add your circular and arrow type view here */}
        <Typography variant="h4" gutterBottom>
          Application Flow
        </Typography>
        <ol>
          <li>Create an account</li>
          <li>Login with your credentials</li>
          <li>Select a candidate to vote for</li>
          <li>Vote for the candidate</li>
          <li>Check your vote status</li>
          <li>Access transparent results</li>
          <li>Receive result notifications</li>
        </ol>
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
