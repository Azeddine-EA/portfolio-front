import '../styles/globals.css';
import '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* <h1 className="text-red-500">Hello</h1> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
