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
            <h1 className='title'>Milady Odoriko</h1>
            <p>The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself. How often have you heard it said that 'you can't do this or that because you're a woman, because you're black, because you're white, because you're old, because you're young, because you're thin, because you're fat, because you're ugly, because you're smart, because you're dumb'? But Milady speaks to you, "you can do anything you put your mind to!"</p>
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
        </div>
    );
};

export default MainMint;