import React, { useState } from 'react';
import axios from 'axios';
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
  Tooltip,
} from '@mui/material';
import {
  FaUser,
  FaIdCard,
  FaAddressCard,
  FaEnvelope,
  FaPhone,
  FaVoteYea,
  FaEdit,
} from 'react-icons/fa';
import { MdOutlineHowToVote } from 'react-icons/md';
import { useHandleCookies } from '../../utils/Cookies';
import { Form } from 'react-router-dom';
import { updateUser, uploadUserProfilePic } from '../../services/dataService';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { getCookieValue } = useHandleCookies('token');
  const token = getCookieValue('token');
  

  const [userProfile, setUserProfile] = useState({
    first_name: user.first_name,
    last_name:user.last_name,
    cnic: user.cnic ?? "null",
    address1: user.address1,
    address2: user.address2,
    photo: user.photo,
    father_name: user.father_name,
    phone: user.number,
    email: user.email,
    voted_for_presidential_candidates: user.voted_for_presidential_candidates,
    voted_for_vice_presidential_candidates: user.voted_for_vice_presidential_candidates,
    is_authorized: user.is_authorized,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  
  
  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async() => {
    setIsEditing(false);
    const profileStatus = await uploadUserProfilePic();
    if (profileStatus.status !== 201) {
      setUserProfile(prev => ({ ...prev, photo: null }));
      alert('Error while updating profile picture');
    } else {
      alert('Profile picture updated successfully');
      const updateProfile = await updateUser(userProfile);
      if (updateProfile.status !== 201) {
        alert('Error while updating profile');
      }
      else {
        alert('Profile updated successfully');
        setUserProfile(updateProfile);    
      }
    }
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
      display: 'flex',
      borderRadius: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3rem',
    }}
    >
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          width: '80%',
          borderRadius: '10px',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {/* Profile Picture Section */}
          <Grid item xs={12} md={4}>
            <div
              style={{
                textAlign: 'start',
              }}
            >
          
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileSelected}
              />
              <Tooltip title="Click here to select image and upload" sx={{left:0}}>
                <Avatar
                  onClick={() => isEditing && (document.getElementById('fileInput').click(), document.getElementById('fileInput').value = '')}
                  style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                  src={preview}
                >
                  {!preview && <FaUser style={{ fontSize: '60px' }} />}
                </Avatar>
              </Tooltip>
            </div>
          </Grid>
          {/* Name Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4">{userProfile.first_name + " " + userProfile.last_name}</Typography>
            {isEditing && (
              <TextField
                name="first_name"
                label="First Name"
                fullWidth
                value={userProfile.first_name}
                onChange={handleChange}
                margin="normal"
              />
            )}
            {isEditing && (
              <TextField
                name="last_name"
                label="Last Name"
                fullWidth
                value={userProfile.last_name}
                onChange={handleChange}
                margin="normal"
              />
            )}
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
                name="father_name"
                label="Father's Name"
                fullWidth
                value={userProfile.father_name}
                onChange={handleChange}
                margin="normal"
              />
            ) : (
              <Typography>{userProfile.father_name}</Typography>
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
                  checked={userProfile.voted_for_presidential_candidates}
                  icon={<MdOutlineHowToVote />}
                  checkedIcon={<FaVoteYea />}
                  disabled={!isEditing}
                />
              }
              label="Voted for Presidential"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={userProfile.voted_for_vice_presidential_candidates}
                  icon={<MdOutlineHowToVote />}
                  checkedIcon={<FaVoteYea />}
                  disabled={!isEditing}
                />
              }
              label="Voted for Vice Presidential"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={userProfile.is_authorized}
                  icon={<MdOutlineHowToVote />}
                  checkedIcon={<FaVoteYea />}
                  disabled={!isEditing}
                />
              }
              label="Eligible"
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
    </div>
  );
};

export default ProfilePage;
