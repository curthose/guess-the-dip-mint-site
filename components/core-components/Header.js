import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton"
import MuiNextLink from "@components/core-components/MuiNextLink";
import Navbar from '@components/core-components/Navbar'
import SideDrawer from "@components/core-components/SideDrawer";
import HideOnScroll from "@components/core-components/HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@components/core-components/BackToTop";
//import Connect from "@components/web3/connect";
import { Stack,Box } from "@mui/material";
import theme from '@styles/theme';

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: 'home', path: '/#home' },
  { title: 'faq', path: '/#faq' }//,
  { title: 'mint', path: '/mint' }
];

const Header = () => {
  return (
    <>
    {/* <HideOnScroll> */}
        <AppBar position="fixed" elevation={0} sx={{ backdropFilter : 'blur(5px)',
            zIndex         : '999',  backgroundColor: theme.palette.background.default }} >
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between`, alignItems: 'center' }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href='/'>
                <Box sx={{backgroundImage:`url(${"/logo.png"});`,backgroundSize:"cover", width:"70px",height:"70px"}}></Box>
                </MuiNextLink>
              </IconButton>
              <Stack direction="row" alignItems='center'>
                <Navbar navLinks={navLinks} />
                <SideDrawer navLinks={navLinks} />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      {/* </HideOnScroll> */}
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="warning" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
