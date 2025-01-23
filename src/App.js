import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WalletConnect from './components/WalletConnect';
import WalletContextProvider from './components/WalletProvider';
import './index.css';

const App = () => {
  return (
    <WalletContextProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <WalletConnect />
        </div>
      </BrowserRouter>
     </WalletContextProvider>
  );
};

export default App;
