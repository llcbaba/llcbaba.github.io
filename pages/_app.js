import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="propeller" content="92b7ee6f5ef84d9be39fe2462500338c" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;