import Head from "next/head";

const Heads = ({ page, desc, keyword }) => {
  return (
    <Head>
      <title>Baba | {page}</title>
      <meta name="description" content={desc} />
      <meta name="keyword" content={keyword} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Heads;
