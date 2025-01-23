import React, { useState,useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';
import WalletButton from './WalletButton';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import Staking from './Staking';

const WalletConnect = () => {
    
    const [walletAddress, setWalletAddress] = useState(null);
    const [error, setError] = useState(null);

    const connectWallet = async () => {
        if (window.solana) {
            try {
                const response = await window.solana.connect();
                setWalletAddress(response.publicKey.toString());
                console.log('Connected with Public Key:', response.publicKey.toString());
            } catch (err) {
                setError(err.message);
                console.error(err);
            }
        } else {
            setError('Phantom wallet not found. Please install it.');
            console.error('Phantom wallet not found');
        }
    };
    const disconnectWallet = () => {
        setWalletAddress(null);
        console.log('Disconnected from wallet');
    };


    return (
        <div className="flex flex-col items-center justify-center  h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <h1 className="text-3xl font-bold mb-5">Connect Your Wallet</h1>

            {walletAddress ? (<div><label  className="flex items-center justify-center w-full max-w-md px-2 py-2 mx-auto text-base font-medium text-white transition duration-150 ease-in-out bg-blue-900 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-3 active:bg-blue-800">{walletAddress}</label><Staking walletAddress={walletAddress}/>
        <button className="flex items-center justify-center w-full max-w-md px-2 py-2 mx-auto text-base font-medium text-white transition duration-150 ease-in-out bg-red-900 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-3 active:bg-blue-800" onClick={disconnectWallet}>Disconnect</button></div>) : (<button className="flex items-center justify-center w-full max-w-md px-2 py-2 mx-auto text-base font-medium text-white transition duration-150 ease-in-out bg-blue-900 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-3 active:bg-blue-800" onClick={connectWallet}>Connect Wallet</button>)}

                        
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>
    );
};

export default WalletConnect;