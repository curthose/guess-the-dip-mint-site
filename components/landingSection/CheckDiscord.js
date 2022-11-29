import React from 'react';
import {
  Grid,
  Typography,
  Paper
} from '@mui/material';
import MuiNextLink from '@components/core-components/MuiNextLink';
const displayName = 'CheckDiscord';
const DELAY = 50;
const CheckDiscord = () => (
  <Grid spacing={1}
    container sx={{
      display                                                       : 'flex',
      alignItems:'center',
      justifycontent                                                : 'center',
      marginBottom                                                  : '120px',
      '@media screen and (min-width: 426px) and (max-width: 768px)' : {
      }
    }}
  >
    <Grid
      align="left"
      color="#fff"
      item
      lg={12}
      md={12}
      sx={{
        '@media screen and (min-width: 426px) and (max-width: 768px)' : {
        }
      }}
      xs={12}
    ><MuiNextLink
    sx={{ textDecoration: "none", color: 'white' }}
    href="https://discord.com/invite/abPXDYwwHc"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Typography
  fontSize="2.813rem"
  fontWeight="400"
  align="center"
  sx={{
    marginBottom : '15px',
    color: `warning.light`,
    marginTop : '30px'
  }}
>
  Join our Discord server
</Typography>
  </MuiNextLink>
  
  <Typography  align="center" sx={{ fontWeight: 400 }} gutterBottom>
  Numerous guesses for Whitelists, NFTs, Altcoins and more!
        </Typography>
      <Grid
        align="center"
        color="#fff"
        item
        xs={12}
      >
      </Grid>
    </Grid>
    <Grid
      item
      lg={12}
      md={12}
      sx={{
        display                             : 'flex',
        justifyContent                      : 'center',
        '@media all and (max-width: 768px)' : {
        },
        marginTop                           : '10px'
      }}
      xs={12}
    >
            <div
          data-aos="zoom-in-bottom"
          data-aos-delay={DELAY}
      >
      <Paper
      elevation={3}
      sx={{backgroundImage:`url(${"/discord3.gif"});`,width:"600px",height:"600px",backgroundSize   : 'cover',
      '@media screen and (min-width: 426px) and (max-width: 768px)' : {
        width:"460px",height:"460px",

      }}}
      />
      </div>
    </Grid>
  </Grid>
);

CheckDiscord.displayName = displayName;

export default CheckDiscord;
