import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Showsolbalance(){
    const wallet = useWallet();
    const {connection}=useConnection();
    
    async function getbalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML=balance/LAMPORTS_PER_SOL
        }
    }

    getbalance();

    return <div>
        <p>Sol balance:</p> <div id="balance"></div>
    </div>
}