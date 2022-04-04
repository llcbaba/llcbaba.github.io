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
      <script>
        (function(s,u,z,p)
        {((s.src = u), s.setAttribute("data-zone", z), p.appendChild(s))}
        )(document.createElement('script'),'https://iclickcdn.com/tag.min.js',4999546,document.body||document.documentElement)
      </script>
    </Layout>
  );
}

export default MyApp;
