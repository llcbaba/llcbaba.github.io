import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <script
          async="async"
          data-cfasync="false"
          src="//pl17169513.safestgatetocontent.com/5d84192ff9af6fbe751dc69ae3bb81fa/invoke.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
