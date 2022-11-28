import React, {useEffect} from 'react';
import AOS from 'aos';
// Material-ui
import {
  Container,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import FortuneWheel from '@components/landingSection/FortuneWheel';
import HoldingBitcoin from '@components/landingSection/HoldingBitcoin';
import AmazingDiscord from '@components/landingSection/AmazingDiscord';
import SoonListed from '@components/landingSection/SoonListed';
import Faq from '@components/landingSection/Faq';
import CheckDiscord from './CheckDiscord';
const displayName = 'LandingSection';

const NftDetail = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <Container
        align="center" disableGutters sx={{
          mt:'200px'
        }}
      >
        <Grid
          container spacing={2}sx={{mt                                  : 4,
            '@media all and (max-width: 320px)' : {
              width       : '130%',
              paddingLeft : '0'
            },
            '@media screen and (min-width: 321px) and (max-width: 375px)' : {
              width       : '112%',
              paddingLeft : '0'
            }}}
        >
          <Grid item xs={12}>
            <Card
              elevation={1}
              sx={{
                height           : '100%',
                padding          : '100px 5% 80px 5%',
                backgroundColor  : '#120c02',
                backgroundRepeat : 'no-repeat',
                backgroundSize   : 'contain',
                borderRadius: '10px'
              }}
            >
              <CardContent sx={{
                display       : 'flex',
                flexDirection : 'column'
              }}
              >
                <FortuneWheel />
                <HoldingBitcoin />
                <AmazingDiscord />
                </CardContent>
            </Card>
          </Grid>

              <Grid item xs={12}>
            <Card
              id="faq"
              elevation={1}
              sx={{
                height           : '100%',
                padding          : '100px 5% 80px 5%',
                backgroundColor  : '#171003',
                backgroundImage  : `url(${"/bg.jpg"}) , url(${"/bg2.jpg"})`,
                backgroundRepeat : 'no-repeat , no-repeat',
                backgroundPosition: 'top , bottom',
                backgroundSize   : 'contain , contain',
                borderRadius: '10px'
              }}
            >
              <CardContent sx={{
                display       : 'flex',
                flexDirection : 'column'
              }}
              >
                <Faq />
                <SoonListed />
                <CheckDiscord />
                </CardContent>
                </Card>
              </Grid>

        </Grid>
      </Container>
  );
};

NftDetail.displayName = displayName;

export default NftDetail;
