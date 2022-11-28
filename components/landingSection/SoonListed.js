import React from 'react';
import {
  Grid,
  Typography,
  Box
} from '@mui/material';
import MuiNextLink from '@components/core-components/MuiNextLink';
const displayName = 'SoonListed';
const DELAY = 50;
const SoonListed = () => (
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
  Soon to be Listed
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
      lg={6}
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
          data-aos="zoom-in"
          data-aos-delay={DELAY}
      >
      <Box
      sx={{backgroundImage:`url(${"/magiceden.png"});`,width:"462px",height:"100px",backgroundSize   : 'cover',
      '@media screen and (min-width: 426px) and (max-width: 768px)' : {
      
      }}}
      />
      </div>
    </Grid>
    <Grid
      item
      lg={6}
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
          data-aos="zoom-in"
          data-aos-delay={DELAY}
      >
      <Box
      sx={{backgroundImage:`url(${"/opensea.png"});`,width:"437px",height:"100px",backgroundSize   : 'cover',
      '@media screen and (min-width: 426px) and (max-width: 768px)' : {
      
      }}}
      />
      </div>
    </Grid>
  </Grid>
);

SoonListed.displayName = displayName;

export default SoonListed;
