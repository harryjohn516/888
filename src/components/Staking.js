import React, { useState,useEffect} from 'react';
import { Connection,PublicKey,StakeProgram,Transaction,LAMPORTS_PER_SOL,clusterApiUrl} from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
const Staking = ({ walletAddress }) => {
    const [validatorPubkey, setValidatorPubkey] = useState('he1iusunGwqrNtafDtLdhsUQDFvo13z9sUa36PauBtk'); // Replace with your validator's public key
    const { wallet, connected } = useWallet();
    
    const [stakeAmount, setStakeAmount] = useState('');
    const [error, setError] = useState(null);
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

    useEffect(() => {
        if (connected) {
            console.log('Wallet connected:', walletAddress);
        }
    }, [connected, wallet]);

    const stakeSOL = async (amount) => {
        
        if (!connected || !wallet || !walletAddress) return;
        try {
            const transaction = new Transaction();
            const lamports = Number(amount) * LAMPORTS_PER_SOL; // Convert SOL to lamports

            // Create stake account
            const stakeAccount = await connection.requestAirdrop(wallet.publicKey, lamports);
            const stakeInstruction = StakeProgram.delegate({
                stakePubkey: stakeAccount, // The public key of the stake account
                authorizedPubkey: wallet.publicKey,
                votePubkey: new PublicKey(validatorPublicKey),
            });
            transaction.add(stakeInstruction);
            const signature = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            console.log('Stake transaction confirmed:', signature);
        } catch (err) {
            console.error('Error staking tokens:', err);
            setError('Transaction failed. Please try again.');
        }
    };

 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Reset error state

        if (!stakeAmount || isNaN(stakeAmount) || Number(stakeAmount) <= 0) {
            setError('Please enter a valid stake amount.');
            return;
        }

        // Call the stake function
        await stakeSOL(stakeAmount);
        
        // Reset the input after submission
        setStakeAmount('');
    };
   

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-8 mt-4 mb-2">
            <input
                type="number"
                step="0.01"
                value={stakeAmount}
                onChange={(e)=>setStakeAmount(e.target.value)}
                placeholder="Enter amount to stake"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                style={{
                    padding: '10px',
                    width: '300px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    color: 'black', // Input text color
                }}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200"
                disabled={connected}
            >
                Stake
            </button>
            {error && <div className="text-red-500">{error}</div>}
        </form>
    );
};

export default Staking;
