import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';

export default function Home() {
  return (
    <>
      <Head>
        <title>movie</title>
        <meta name="description" content="movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />
      <main>
        <Swiper />
      </main>

      <footer></footer>
    </>
  );
}
