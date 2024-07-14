import React from 'react'
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export const FeedbackModal = ({ open, handleClose }) => {
  const [feedback, setFeedback] = React.useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    // Submit the feedback to the server
    console.log('Feedback submitted:', feedback);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="feedback-modal-title"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '400px',
          minHeight: '300px',
        }}
      >
        <Typography variant="h5" id="feedback-modal-title" gutterBottom>
          Feedback
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Your feedback"
          multiline
          rows={4}
          defaultValue=""
          onChange={handleFeedbackChange}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};
