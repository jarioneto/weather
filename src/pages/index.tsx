import type { NextPage } from 'next';
import Head from 'next/head';
import Home from 'components/Home';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Wheather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
