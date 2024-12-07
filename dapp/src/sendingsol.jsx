import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function Sendsol(){
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens(){
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
      
        const transaction = new Transaction({
            fromPubkey : wallet.publicKey,
            toPubkey : new PublicKey(to),
            lamports : amount*LAMPORTS_PER_SOL
        })

        await wallet.sendTransaction(transaction,connection)
        alert("Sent " + amount + " SOL to " + to);
    }


    return(
        <div>
            <input id="to" type="text" placeholder="To"/>
            <input id="Amount" type="text" placeholder="Amount"/>
            <button onClick={sendTokens}>Send SOL</button>
        </div>
    )
}