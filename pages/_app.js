import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      {/* <h1 className="text-red-500">Hello</h1> */}
      <Component {...pageProps} />
    </>
  );
}

export default App;
