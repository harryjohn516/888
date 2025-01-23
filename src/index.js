import { StrictMode } from 'react';
import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';

// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from '@solana/wallet-adapter-react';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';



// const wallets = [new PhantomWalletAdapter()];

const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    {/* <ConnectionProvider endpoint="https://mainnet.helius-rpc.com/?api-key=141706be-0af5-478e-a47c-a59f7effc38b">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider> */}
      <App />
      {/* </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider> */}
  </StrictMode>
);


