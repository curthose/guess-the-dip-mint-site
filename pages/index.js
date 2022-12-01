import Head from 'next/head';
import MuiNextLink from '../components/core-components/MuiNextLink';
import { Container, Button, Stack, Box, Grid, Typography } from '@mui/material';
import { Twitter } from "@mui/icons-material";
import LandingSection from '../components/landingSection';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Image from 'next/image';

export default function Home() {
  return (
    
    <Container disableGutters >
      
      <Head id="home">
        <title>Guess The Dip</title>
        <meta name="description" content="Guess The Dip" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
      </Head>
          
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box sx={{mt:'220px'}} >
          <Typography  sx={{color:"#f8b213"}} align="center" variant="h4" gutterBottom>
          Guess the dip price of Bitcoin, get the big Bitcoin prize.
            </Typography>
            <Typography align="center" variant="subtitle1" gutterBottom>
            10,000 uniquely generated NFTs on Aptos Blockchain.  Also, they are all random guesses. The winners will receive prizes.
            </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
      >
        
        <Button
        variant="contained"
        href="#"
        size="large"
        color="warning"
        disableElevation
      >
        SOLD OUT!
        </Button>
        
        <MuiNextLink
          sx={{ textDecoration: "none", color: 'white' }}
          href="https://twitter.com/guessthedip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </MuiNextLink>

        <MuiNextLink
          sx={{ textDecoration: "none", color: 'white' }}
          href="https://discord.com/invite/abPXDYwwHc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height="30px"
            src={"/discord_logo.png"}
            width="30px"
          />
        </MuiNextLink>
      </Stack>
            </Box>
          </Grid>
        
            <Grid item md={6} xs={12} sx={{
              display: {  xs: 'none', sm: 'none', md: 'block'}
              }}>
              <Box sx={{mt:"100px",backgroundImage:`url(${"/spin.png"});`,width:'470px',height:'470px', position:'absolute', backgroundSize: "cover",animation: "spin 4s ease-out 2",
              "@keyframes spin": {
                "0%": {
                  transform: "rotate(1080deg)",
                },
                "100%": {
                  transform: "rotate(0deg)",
                },
              },}}/>
              <Box  sx={{backgroundImage:`url(${"/btc.png"});`,backgroundSize: "cover", mt:"100px",position:'absolute',width:'470px',height:'470px'}}/>
            </Grid>
            <LandingSection />
          
          
        </Grid>
    </Container>
  )
}
