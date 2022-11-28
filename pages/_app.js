import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from '../styles/createEmotionCache';
import "/styles/globals.css";
import theme from '../styles/theme';
import Footer from "../components/core-components/Footer";
import Header from "../components/core-components/Header";

const clientSideEmotionCache = createEmotionCache();

import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter
} from '@manahippo/aptos-wallet-adapter';
import { ToastContainer } from 'react-toastify';

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const wallets = [
    new RiseWalletAdapter(),
    // new HippoWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    // new HippoExtensionWalletAdapter(),
    new PontemWalletAdapter(),
    new SpikaWalletAdapter(),
    new FletchWalletAdapter()
  ];

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <WalletProvider
          wallets={wallets}
          autoConnect={false} /** allow auto wallet connection or not **/
          onError={(error) => {
            console.log('Handle Error Message', error);
          }}>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ToastContainer />
        </WalletProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

