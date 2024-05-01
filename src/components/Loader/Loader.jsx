import React from 'react';
import { CircularProgress, LinearProgress, Box } from '@mui/material';

const Loader = ({ type }) => {
  if (type === 'circular') {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  } else if (type === 'linear') {
    return <LinearProgress />;
  } else {
    return null;
  }
};

export default Loader;
