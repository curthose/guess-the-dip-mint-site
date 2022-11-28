import React from 'react';
import {
    Box,
  Grid,
  Typography,
  Paper
} from '@mui/material';

const displayName = 'FortuneWheel';
const DELAY = 50;
const FortuneWheel = () => (
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
          color        : 'warning.light',
          marginTop : '30px'
        }}
      >
        How does the fortune wheel work?
      </Typography>
      <Grid
        align="left"
        color="#fff"
        item
        xs={12}
      >
        <Typography sx={{marginTop:'10px'}}  gutterBottom>
        Guess the Dip is the very first experimental guessing competition in the NFT space. 
        The aim is to guess the dip price of BTC/USD until the next halving (in 2024). 
        Each NFT represents a BTC price in USD and acts like a lottery ticket for the competition. 
        The winner NFT is the one with the matching number on it at the dip price of BTC in the 2022 bull cycle.
        </Typography>
        <Typography sx={{marginTop:'10px'}} gutterBottom>
        We set the boundaries of BTC/USD price the top at $17,620 and the bottom price at $3,000. 
        Between this range, there are 10,000 NFTs randomly generated with different BTC/USD prices 
        This is a project and we collect 5% royalty fees from each transaction. 
        The 5% of the transaction fees collected until the next halving in 2024 will go to the winner NFT holder. 
        The remaining 5% will go to the last digit matching number of all the NFTs evenly distributed (i.e, if the dip price is 14,502, then all the NFTs with an ending number of &#39;2&#39; will get a share of the price).
        </Typography>
        <Typography
        fontWeight="500"
        sx={{
          marginBottom : '5px',
          marginTop : '10px',
          color        : 'warning.light',
        }}
      >
        What is there a reward system for guessers?
      </Typography>
        <Typography gutterBottom>
        <Box sx={{color: 'warning.light'}} fontWeight='500' display='inline'>Grand Prize:</Box> The matching NFT of the dip price of BTC/USD will get the whole 30% of the royalty fees.

        </Typography>
        <Typography sx={{marginTop:'10px'}} gutterBottom>
        <Box sx={{color: 'warning.light'}} fontWeight='500' display='inline'>Lucky Prize:</Box> The matching last digit of all NFTs with the Bitcoin dip price of BTC/USD will share 20% of royalty fees.
        </Typography>
        
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
      sx={{backgroundImage:`url(${"/preview.gif"});`,width:"400px",height:"400px",backgroundSize   : 'cover',}}
      />
      </div>
    </Grid>
  </Grid>
);

FortuneWheel.displayName = displayName;

export default FortuneWheel;
