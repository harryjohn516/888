import React,{useEffect} from 'react';
import { ConnectionProvider,WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

const WalletContextProvider=({children})=>{
    const wallets=[new PhantomWalletAdapter()];
    return (
        <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
            <WalletProvider wallets={wallets} autoConnect>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    );
};
export default WalletContextProvider;