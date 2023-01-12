import { useEffect, useState } from "react";

import {
  ConnectWallet,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";

import styles from "styles/Home.module.css";
import { HTMLHead } from "modules/common";
import { useDex, useDexToken } from "modules/utils";

export const Head: React.FC = () => (
  <HTMLHead>
    <title>DEX</title>
  </HTMLHead>
);

export const Body: React.FC = () => {
  const {
    name,
    flip,
    getEtherBalance,
    getTokenBalance,
    getLPTokenBalance,
    toEth,
  } = useDex();

  const { tokenSymbol } = useDexToken();

  const [pair, setPair] = useState({
    from: { amount: 0, symbol: "ETH" },
    to: { amount: 0, symbol: tokenSymbol },
  });

  useEffect(() => {
    (async () => {})();
  }, []);

  useEffect(() => {
    setPair({
      from: { amount: 0, symbol: "ETH" },
      to: { amount: 0, symbol: tokenSymbol },
    });
  }, [tokenSymbol]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.dex}>
        {
          <>
            <p className={styles.textCenter + styles.wFull}>{name}</p>
            <div className={styles.display}>
              <span>{pair.from.amount}</span>
              <span>{pair.from.symbol}</span>
            </div>
            <span>^v</span>
            <div className={styles.display}>
              <span>{pair.to.amount}</span>
              <span>{pair.to.symbol}</span>
            </div>
            <div></div>
            <ConnectWallet />
          </>
        }
      </div>
    </main>
  );
};
