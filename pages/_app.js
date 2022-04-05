import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <Script
          type="text/javascript"
          src="//pl17169538.safestgatetocontent.com/86/b9/92/86b99238b4c0b87bd7e7a2642391327c.js"
        ></Script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
