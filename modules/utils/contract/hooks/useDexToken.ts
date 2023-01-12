import { useContract, useContractRead } from "@thirdweb-dev/react";

import { TOKEN_CONTRACT_ADDRESS } from "modules/common";

export default function useDexToken() {
  // Token Contract
  const { contract: contract } = useContract(TOKEN_CONTRACT_ADDRESS);
  const { data: name } = useContractRead(contract, "name");
  const { data: symbol } = useContractRead(contract, "symbol");

  return { tokenContract: contract, tokenName: name, tokenSymbol: symbol };
}
