import React, { useState } from 'react';
import erc20abi from "./erc20ABI.json";
import { ethers } from 'ethers';

const AddressData = () => {

  const INFURA_ID = '790a3c8a86b6456497d4bf32fc97c0eb';

  const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

  const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

  const [addressName, setAddressName] = useState(null);
  
  const [addressSymbol, setAddressSymbol] = useState(null);

  const getAddressData = async () => {
    const contract = new ethers.Contract(address, erc20abi, provider);
    const tokenName = await contract.name();
    const tokenSymbol = await contract.symbol();
    setAddressName(tokenName);
    setAddressSymbol(tokenSymbol);
  }

  /* Note */

  getAddressData();

  return (
    <div>
      <div>Token name: {addressName}</div>
      <div>Token symbol: {addressSymbol}</div>
    </div>
  );
}

export default AddressData;