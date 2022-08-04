import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { weatherTheme } from 'styles';
import { globalStyles } from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={weatherTheme}>
        <Component {...pageProps} />
      </div>
      <Toaster />
    </>
  );
}

export default App;
