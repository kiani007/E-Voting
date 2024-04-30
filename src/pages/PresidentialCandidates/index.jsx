import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import pti from "../../assets/Pti.png";
import pml from "../../assets/pml.jpg";

const Index = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              General Election 2023
            </Typography>
            <Typography variant="h5">Presidential Candidates</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia component="img" image={pml} alt="PML-N" height="150" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Nawaz Sharif
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PML-N
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia component="img" image={pti} alt="PTI" height="150" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Asif Zardari
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PPP
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia component="img" image={pti} alt="PTI" height="150" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Altaf Hussain
              </Typography>
              <Typography variant="body2" color="text.secondary">
                MQM
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia component="img" image={pti} alt="PTI" height="150" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Imran Khan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PTI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
