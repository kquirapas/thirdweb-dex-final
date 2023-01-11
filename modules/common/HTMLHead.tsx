import Head from "next/head";

const HTMLHead: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Head>
      <meta
        name="description"
        content="thirdweb is everything you need to connect your apps or games to decentralized networks. Powerful tools that simplify web3 development."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {props.children}
    </Head>
  );
};

export default HTMLHead;
