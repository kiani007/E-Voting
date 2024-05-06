import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Avatar,
  Button,
} from '@mui/material';
import {
  FaUser,
  FaIdCard,
  FaAddressCard,
  FaEnvelope,
  FaPhone,
  FaVoteYea,
  //   FaVoteNay,
  FaEdit,
} from 'react-icons/fa';
import { MdOutlineHowToVote } from 'react-icons/md';

const ProfilePage = () => {
  // Sample data for the user profile
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    cnic: '12345-6789101-1',
    address1: '123 Main Street',
    address2: 'Apt 101',
    fatherName: 'Jane Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    votedPresidential: true,
    votedVicePresidential: false,
    eligible: true,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          style={{ padding: '20px', backgroundColor: '#fff' }}
        >
          <Grid container spacing={3} alignItems="center">
            {/* Profile Picture Section */}
            <Grid item xs={12} md={4}>
              <div
                style={{
                  textAlign: 'center',
                  backgroundColor: '#2196f3',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <Avatar
                  style={{ width: '100px', height: '100px', margin: '0 auto' }}
                >
                  <FaUser style={{ fontSize: '60px' }} />
                </Avatar>
              </div>
            </Grid>
            {/* Name Section */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4">{userProfile.name}</Typography>
              {isEditing ? (
                <TextField
                  name="name"
                  label="Name"
                  fullWidth
                  value={userProfile.name}
                  onChange={handleChange}
                  margin="normal"
                />
              ) : null}
            </Grid>
            {/* CNIC Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                <FaIdCard /> CNIC
              </Typography>
              <Typography>{userProfile.cnic}</Typography>
            </Grid>
            {/* Address Section */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6">
                <FaAddressCard /> Address
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="address1"
                    label="Address 1"
                    fullWidth
                    value={userProfile.address1}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    name="address2"
                    label="Address 2"
                    fullWidth
                    value={userProfile.address2}
                    onChange={handleChange}
                    margin="normal"
                  />
                </>
              ) : (
                <Typography>
                  {userProfile.address1}
                  <br />
                  {userProfile.address2}
                </Typography>
              )}
            </Grid>
            {/* Father Name Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Father's Name</Typography>
              {isEditing ? (
                <TextField
                  name="fatherName"
                  label="Father's Name"
                  fullWidth
                  value={userProfile.fatherName}
                  onChange={handleChange}
                  margin="normal"
                />
              ) : (
                <Typography>{userProfile.fatherName}</Typography>
              )}
            </Grid>
            {/* Phone Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                <FaPhone /> Phone
              </Typography>
              {isEditing ? (
                <TextField
                  name="phone"
                  label="Phone"
                  fullWidth
                  value={userProfile.phone}
                  onChange={handleChange}
                  margin="normal"
                />
              ) : (
                <Typography>{userProfile.phone}</Typography>
              )}
            </Grid>
            {/* Email Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                <FaEnvelope /> Email
              </Typography>
              {isEditing ? (
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  value={userProfile.email}
                  onChange={handleChange}
                  margin="normal"
                />
              ) : (
                <Typography>{userProfile.email}</Typography>
              )}
            </Grid>
            {/* Voting Section */}
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={userProfile.votedPresidential}
                    icon={<MdOutlineHowToVote />}
                    checkedIcon={<FaVoteYea />}
                  />
                }
                label="Voted for Presidential"
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={userProfile.votedVicePresidential}
                    icon={<MdOutlineHowToVote />}
                    checkedIcon={<FaVoteYea />}
                  />
                }
                label="Voted for Vice Presidential"
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={userProfile.eligible}
                    icon={<MdOutlineHowToVote />}
                    checkedIcon={<FaVoteYea />}
                  />
                }
                label="Eligible"
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          {isEditing ? (
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleEdit}
              startIcon={<FaEdit />}
            >
              Edit Profile
            </Button>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default ProfilePage;
