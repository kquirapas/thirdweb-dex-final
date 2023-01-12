import { useEffect, useState } from "react";
import { useContract, useContractRead, useSDK } from "@thirdweb-dev/react";

import { DEX_CONTRACT_ADDRESS } from "modules/common";
import { useDexToken } from "modules/utils";

export default function useDex() {
  const sdk = useSDK();
  // Token Contract
  const { contract: dexContract } = useContract(DEX_CONTRACT_ADDRESS);

  const { tokenContract, tokenName, tokenSymbol } = useDexToken();
  const [toEth, setToEth] = useState<boolean>(false);

  // DEX assets

  // WALLET assets

  // useEffect(() => {}, [toEth]);

  const flip = () => {
    setToEth((prev) => !prev);
  };

  const getEtherBalance = async (address: string) => {
    if (!sdk) {
      console.error("getEtherBalance: sdk is undefined");
      return;
    }

    return await sdk.getBalance(address);
  };

  const getTokenBalance = async (address: string) => {
    if (!tokenContract) {
      console.error("getTokenBalance: tokenContract is undefined");
      return;
    }

    return await tokenContract.call("balanceOf", address);
  };

  const getLPTokenBalance = async (address: string) => {
    if (!dexContract) {
      console.error("getLPTokenBalance: dexContract is undefined");
      return;
    }

    return await dexContract.call("balanceOf", address);
  };

  /*
   * @dev
   */
  return {
    name: `${tokenName} (${tokenSymbol}) Swap`,
    toEth,
    flip,
    getEtherBalance,
    getTokenBalance,
    getLPTokenBalance,
    // addLiquidity: undefined,
    // removeLiquidity: undefined,
    getEstimate: undefined,
    // swap function to use
    swap: undefined,
  };
}

// I NEED
// balance (amount) from user wallet
// balance (amount) in dex
// denomination
