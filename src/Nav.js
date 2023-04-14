import React from 'react';
import { Flex, Image, Link, Box, Spacer, Button } from '@chakra-ui/react';
import Twitter from './assets/links/twitter.png';
import Etherscan from './assets/links/etherscan.png';

const Nav = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        };
    };

    return (
        <Flex justify='space-between' align='center' padding='60px 30px'>
            <Flex justify='space-around' width='20%' padding='0 60px 0 0'>
                <Link href='https://twitter.com'>
                    <Image src={Twitter} width='36px' margin='0px' />
                </Link>
            </Flex>
            <Flex justify='space-around' width='20%' padding='0 60px 0 0'>
                <Link href='https://etherscan.io'>
                    <Image src={Etherscan} width='36px' margin='0 15px' />
                </Link>
            </Flex>
            <Spacer />
            <Flex justify='space-around' align='center' width='40%' padding='0 60px 0 0'>
                <Box margin='0 1.25vw'>About</Box>
                <Spacer />
                <Box margin='0 1.25vw'>Mint</Box>
                <Spacer />


                {isConnected ? (
                    <Box margin='0 2.5vw 0 1vw'>Connected</Box>
                ) : (
                    <Button 
                    backgroundColor='#7d3d78' 
                    borderRadius='10px'
                    color='white'
                    width='100px'
                    cursor='pointer'
                    fontSize='20px'
                    padding='15px'
                    margin='0 15px'
                    onClick={connectAccount}
                    >
                        Connect
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};

export default Nav;