
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import { Message } from '@solana/web3.js';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage(){
    
    const { publicKey, signMessage } = useWallet();

    async function onclick(){
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message)
        const signature = await signMessage(encodedMessage);
        
        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    
    }


    return (
        <div>
            <input id='message' type="text" placeholder='Message'/>
            <button onClick={onclick}>Sign Message</button>
        </div>
    )
}