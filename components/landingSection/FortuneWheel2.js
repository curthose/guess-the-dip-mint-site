import React from 'react';
import {
  Grid,
  Typography,
  Paper
} from '@mui/material';

const displayName = 'RewardSystem';
const DELAY = 50;
const RewardSystem = () => (
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
        fontSize="1.513rem"
        fontWeight="400"
        sx={{
          marginBottom : '15px',
          color        : 'warning.light',
        }}
      >
        What is there a reward system for guessers?
      </Typography>
      <Grid
        align="left"
        color="#fff"
        item
        xs={12}
      >
        <Typography gutterBottom>
        Grand Prize: The matching NFT of the dip price of BTC/USD will get the whole 5% of all transaction fees.

        </Typography>
        <Typography sx={{marginTop:'10px'}} gutterBottom>
        Lucky Prize: The matching last digit of all NFTs with the Bitcoin dip price of BTC/USD will share 5% of all transaction fees.
        </Typography>
      </Grid>
    </Grid>

  </Grid>
);

RewardSystem.displayName = displayName;

export default RewardSystem;
