import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Swiper from '../components/Swiper';
import Movie from '../components/Movie';

export default function Home() {
  return (
    <>
      <Head>
        <title>movie</title>
        <meta name="description" content="movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Swiper />
        <Movie />
      </Layout>
    </>
  );
}
