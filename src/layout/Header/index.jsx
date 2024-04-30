import React from "react";
import styles from "./header.module.css";
import { Box, Typography } from "@mui/material";
import { Navbar } from "../index.js";

const index = () => {
  return (
    <header style={{ marginBottom: "2rem" }}>
      <Box className={styles.root}>
        {/* Logo */}
        <Typography variant="h4" align="center" gutterBottom>
          E-Voting Electoral System
        </Typography>
        {/* Navigation links */}
        <Navbar />
      </Box>
    </header>
  );
};

export default index;
