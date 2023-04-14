import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import DanceMiladyDance from './DanceMiladyDance.json';

const DanceMiladyDanceAddress = '0x1Fa8fA5ADc3cc3c72260Ca7c20e14F33966bB91D';

const MainMint = ({ accounts, SetAccounts }) => {
    const [mintAmount, setMintAmount ] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.etherum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                DanceMiladyDanceAddress,
                DanceMiladyDance.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            } catch (err) {
                console.log('error: ', err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <div>
            <h1 className='title'>miLady ODOriko</h1>
            <div className='main'>
                {isConnected ? (
                    <div>
                        <div>
                            <button onClick={handleDecrement}>-</button>
                            <input type='number' value={mintAmount} />
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button onClick={handleMint}>Mint</button>
                    </div>
                ) : (
                    <p>You must connect your wallet to mint.</p>
                )}
                <p className='lore'>
                Milady celebrates life in all its chaotic, irrational, and destructive glory. 
                She is a reminder that the human spirit cannot be contained or controlled, but must be 
                allowed to express itself freely. In her dance, Milady loses herself 
                in the ecstasy of the crowd and is transported beyond the confines of her own ego. 
                Milady represents the dark, irrational forces that lie at the core of human nature, 
                and it is only through embracing these forces that one can truly live.
                </p>
            </div>
        </div>
    );
};

export default MainMint;