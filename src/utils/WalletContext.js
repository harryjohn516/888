import React,{useMemo} from 'react';
import { ConnectionProvider,WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import{PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');


const WalletContextProvider=({children})=>{
    // const network=WalletAdapterNetwork.Devnet;

    const network=clusterApiUrl('mainnet-beta');

    const wallets=useMemo(()=>[
        new PhantomWalletAdapter(),
    ],[]);

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
export default WalletContextProvider;