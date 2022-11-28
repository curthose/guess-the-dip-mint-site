import React from 'react';
import {
  Grid,
  Typography,
  Paper
} from '@mui/material';
import MuiNextLink from '@components/core-components/MuiNextLink';

const displayName = 'AmazingDiscord';
const DELAY = 50;

const AmazingDiscord = () => (
  <Grid spacing={1}
    container sx={{
      display                                                       : 'flex',
      alignItems                                                    : 'center',
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
      lg={6}
      md={6}
      sx={{
        '@media screen and (min-width: 426px) and (max-width: 768px)' : {
        }
      }}
      xs={12}
    >
      <Typography
        fontSize="2.813rem"
        fontWeight="400"
        sx={{
          marginBottom : '15px',
          color        : 'warning.light',
          marginTop : '30px'
        }}
      >
        Guess how flourishing the community is.
      </Typography>
      <Grid
        align="left"
        color="#fff"
        item
        xs={12}
      >
        <Typography gutterBottom>
        
Our warm welcoming community continues its interesting activities together on discord.
It started with discussions about Bitcoin&#39;s dip price.
It has become a community where technical analyzes are shared and enthusiasts abound.
Now, every day since August 4, we have been playing the guessing game of the value of bitcoin, giving out dollar prizes to the winners.
Just like our upcoming project itself, huh? 

        </Typography>
        <MuiNextLink
          sx={{ textDecoration: "none", color: 'white' }}
          href="http://discord.gg/XHyEDSbUS6"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Typography  color="#18B6E2" sx={{mt : 2}}>
        Take a look at our Discord server!
      </Typography>
        </MuiNextLink>
      </Grid>
    </Grid>
    <Grid
      item
      lg={6}
      md={6}
      sx={{
        display                             : 'flex',
        justifyContent                      : 'center',
        '@media all and (max-width: 768px)' : {
        }
      }}
      xs={12}
    >
      <div
          data-aos="zoom-in-right"
          data-aos-delay={DELAY}
      >
        <Paper
              elevation={3}
              sx={{backgroundImage:`url(${"/discord2.gif"});`,width:"360px",height:"360px",backgroundSize   : 'cover',}}
        />
      </div>
    </Grid>
  </Grid>
);

AmazingDiscord.displayName = displayName;

export default AmazingDiscord;
