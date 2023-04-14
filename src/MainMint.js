import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Flex, Input, Box, Button, Text } from '@chakra-ui/react';
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
        <Flex justify='center' align='center' height='100%' paddingBottom='150px'>
            <Box width='820px'>
                <h1 className='title'>miLady ODorikO</h1>
                {isConnected ? (
                    <div>
                        <Flex align='center' justify='center'>
                            <Button 
                            onClick={handleDecrement}
                            backgroundColor='#7d3d78' 
                            borderRadius='10px'
                            color='white'
                            width='70px'
                            cursor='pointer'
                            fontSize='40px'
                            padding='5px'
                            >
                                -
                            </Button>
                            <Input 
                            className='number'
                            fontSize='40px'
                            type='number' 
                            value={mintAmount} 
                            readOnly
                            width='100px'
                            height='60px'
                            borderRadius='10px'
                            textAlign='center'
                            paddingLeft='19px'
                            />
                            <Button 
                            onClick={handleIncrement}
                            backgroundColor='#7d3d78' 
                            borderRadius='10px'
                            color='white'
                            width='70px'
                            cursor='pointer'
                            fontSize='40px'
                            padding='5px'
                            >
                                +
                            </Button>
                        </Flex>
                        <Button 
                        onClick={handleMint}
                        fontFamily='inherit'
                        backgroundColor='#7d3d78' 
                        borderRadius='10px'
                        color='white'
                        width= '240px'
                        cursor='pointer'
                        fontSize='30px'
                        padding='5px'
                        >
                            ☆.｡.:*Dance.｡.:*☆
                        </Button>
                    </div>
                ) : (
                    <Text
                    marginTop='70px'
                    fontSize='50px'
                    letterSpacing='-5.5%'
                    fontFamily='Inherit'
                    color='#ad61a8'
                    >
                       Connect wallet to mint
                    </Text>
                )}
                <p>
                Odoriko is the hidden language of the soul; when we dance, we are truly free. We 
                are free to move our bodies in ways that express our deepest emotions, to let go of 
                our fears and inhibitions, and to connect with something greater than ourselves. In 
                dance, we find a space where we can be completely present, fully alive, and 
                authentically ourselves. It is a space where we can explore the boundaries of our 
                bodies and our minds, and where we can celebrate the beauty and diversity of human 
                experience. In dance, we are not bound by the limitations of language, culture, or 
                convention. We are free to express ourselves in ways that transcend these boundaries 
                and connect us to the universal human spirit. So let us dance, and let us be free
                </p>
                <p>
                Milady celebrates life in all its chaotic, irrational, and destructive glory. 
                She is a reminder that the human spirit cannot be contained or controlled, but must be 
                allowed to express itself freely. In her dance, Milady loses herself 
                in the ecstasy of the crowd and is transported beyond the confines of her own ego. 
                Milady represents the dark, irrational forces that lie at the core of human nature, 
                and it is only through embracing these forces that one can truly live.
                </p>
            </Box>
        </Flex>
    );
};

export default MainMint;