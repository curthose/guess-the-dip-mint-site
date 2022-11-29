import React from 'react';
import {
  Grid,
  Typography
} from '@mui/material';

const displayName = 'Faq';
const Faq = () => (
  <Grid  spacing={1} container
    sx={{
      display                                                       : 'flex',
      justifycontent                                                : 'center',
      alignItems:'center',
      marginBottom                                                  : '40px',
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
        align='center'
        sx={{
          marginBottom : '15px',
          color        : 'warning.light',
        }}
      >
        Frequently Asked Questions
      </Typography>
        <Typography sx={{ fontWeight: 600,marginTop : '60px' }} gutterBottom>
        What is Guess the Dip? 
        </Typography>
        <Typography gutterBottom>
        Guess the Dip is a NFT collection inspired by the evolution of Bitcoin. 
        10,000 NFT collection will be 1 APT to mint by the whitelist holders. 
        
        In every cycle, we spot a dip price of Bitcoin, so if you believe yourself as a good guesser, 
        we will make you happy if you guess it right. 
        </Typography>
        <Typography sx={{ fontWeight: 600 ,marginTop : '30px' }} gutterBottom>
        Why the Guess The Dip collection created?
        </Typography>
        <Typography gutterBottom>
        Bitcoin whales always wonder what will be the dip price of Bitcoin, 
        so everybody tries to guess the dip, if you can guess the dip price of Bitcoin, 
        you will get the big Bitcoin prize by whales, 
        this collection will help the legend guesser and will be known among all the whales in history.
        </Typography>
        <Typography sx={{ fontWeight: 600,marginTop : '30px'}} gutterBottom>
        Is there a reward system for other guessers?
        </Typography>
        <Typography gutterBottom>
        Yes. For example, if you correctly guess the last digit of Bitcoin at the dip price, for example, if the BTC dip price is 11,558, then the last digit number ‘8’ will be the lucky last digit and all of the NFTs whose last digit are also ‘8’, will also win the small prize from the prize pool.
        </Typography>
        <Typography sx={{ fontWeight: 600,marginTop : '30px'}} gutterBottom>
        What is the total supply?
        </Typography>
        <Typography gutterBottom>
        10,000  NFTs
        </Typography>
        <Typography sx={{ fontWeight: 600,marginTop : '30px'}} gutterBottom>
        What is the mint price? 
        </Typography>
        <Typography gutterBottom>
        1 APTOS
        </Typography>
        <Typography sx={{ fontWeight: 600,marginTop : '30px'}} gutterBottom>
        When is the release date? 
        </Typography>
        <Typography gutterBottom>
        28.11.2022
        </Typography>
        <Typography sx={{ fontWeight: 600,marginTop : '30px'}} gutterBottom>
        How do I get a whitelist?
        </Typography>
        <Typography gutterBottom>
        There will be different activities and challenges in our Discord to get a spot. Just be active, vibe and keep on believing!
        </Typography>
    </Grid>
  </Grid>
);

Faq.displayName = displayName;

export default Faq;
