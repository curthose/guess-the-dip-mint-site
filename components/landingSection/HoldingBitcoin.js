import React from 'react';
import {
  Grid,
  Typography
} from '@mui/material';
import Image from 'next/image';

const displayName = 'HoldingBitcoin';
const DELAY = 50;
const HoldingBitcoin = () => (
  <Grid spacing={1} container
    sx={{
      display                                                       : 'flex',
      justifycontent                                                : 'center',
      alignItems:'center',
      marginBottom                                                  : '120px',
      '@media screen and (min-width: 426px) and (max-width: 768px)' : {
      }
    }}
  >
    <Grid
      item
      lg={6}
      md={6}
      xs={12}
      sx={{
        display                             : 'flex',
        justifyContent                      : 'center',
        '@media all and (max-width: 768px)' : {
        }
      }}
      
    >
    <div
    data-aos="zoom-in-left"
    data-aos-delay={DELAY}
      >
      <Image
            alt="NFTdetail"
            height="450px"
            src={"/hold.gif"}
            width="307px"
      />
      </div>
    </Grid>
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
        We&#39;re holding Bitcoin.
      </Typography>
      <Grid
        align="left"
        color="#fff"
        item
        xs={12}
      >
        <Typography gutterBottom>
        We are the guessers who carry Bitcoin on their shoulders just as Atlas carries the world. 
        As these guessers, we all got together in Discord and turned that market expectation into a public conversation. 
        Namely, we have met at the last point where Bitcoin can fall. 
        Guess The Dip means turning into a collection that lives and communicates the current state of the market, 
        which is the main agenda of the entire crypto community.

        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

HoldingBitcoin.displayName = displayName;

export default HoldingBitcoin;
