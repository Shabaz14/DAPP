import { useWallet,useConnection } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";

export function Airdrop(){
   
    const wallet = useWallet();
    const {connection} = useConnection();

    async function SendAirdropuser(){
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount *1000000000);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }
   
    return(
    <div> 
      <input type="text" placeholder="Amount"></input>
      <button id="amount" onClick={SendAirdropuser}>Send Air drop</button>
    </div>
   )
}