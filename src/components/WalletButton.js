// filepath: /E:/SmartContract/hellosmart/src/components/WalletButton.js
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletButton = () => {
    const { connected } = useWallet();

    return (
        <div>
            {/* <WalletMultiButton /> */}
            {connected && <p>Wallet Connected</p>}
        </div>
    );
};

export default WalletButton;