import React from 'react'

const VotingDurationSetting = () => {
  return (
     <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            Voting Duration Setting
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ display: 'flex', backgroundColor: 'grey.200', borderRadius: '5px' }}>
          <Grid container spacing={4} >
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
              <Typography variant="h5" align="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                              Voting Duration
              </Typography>
                      </Grid>
                  </Grid>
        </Grid> 
      </Grid>
    </Container>
  )
}

export default VotingDurationSetting;
