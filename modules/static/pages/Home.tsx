import { ConnectWallet, useContract, useContractRead } from "@thirdweb-dev/react";

import { HTMLHead } from "modules/common";

export const Head: React.FC = () => (
  <HTMLHead>
    <title>DEX</title>
  </HTMLHead>
);

export const Body: React.FC = () => {
  const { contract } = useContract(
    "0x5536Fc1eb2D03F5c1cE4AF4bb7D8B48641f3a48a"
  );

  const { data, isLoading, error } = useContractRead(
    contract,
    "getTokensInContract"
  );

  return (
    <main>
	  <p>IM HERE</p>
      <div>{data}</div>
    </main>
  );
};
