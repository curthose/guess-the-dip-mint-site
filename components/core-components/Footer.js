import Box from "@mui/material/Box";
import styles from '@styles/Home.module.css';
import Typography from '@mui/material/Typography';
import MuiNextLink from '@components/core-components/MuiNextLink';
import { Twitter } from "@mui/icons-material";
import Image from 'next/image';
import { Stack, Link } from "@mui/material";

const Footer = () => {
  return (
  <Box component="footer" alignItems="center" className={styles.footer} sx={{ py: 5, px: 4, mt:'120px'}}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={4}
      >
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

        <Typography >
          © {new Date().getFullYear()}
        </Typography>
      </Stack>
  </Box>);
};

export default Footer;
