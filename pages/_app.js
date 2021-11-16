import '../styles/globals.css'
import Head from "next/head";
import '../components/header/header.scss'
import '../components/sidebar/sidebar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
