import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { Showsolbalance } from './solbal';
import { SignMessage } from './message';
import { Sendsol } from './sendingsol';

function App() {
 

  return (
    <>
       <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/lBGku5RPMOxZDv5YkqIZHigi_Tz2btD_"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton/>
                  <WalletDisconnectButton/>
                  solana wallet adapter
                 <Airdrop/> 
                 <Showsolbalance></Showsolbalance>
                 <SignMessage/>
                 <Sendsol></Sendsol>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
     
    </>
  )
}

export default App
