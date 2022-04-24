import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Swiper from '../components/Swiper';
import { getSwiper } from '../api';
import Movie from '../components/Movie';

export default function Home({ swiper }) {
  return (
    <>
      <Head>
        <title>movie</title>
        <meta name="description" content="movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Swiper data={swiper} />
        <Movie />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { data: swiper } = await getSwiper();

  return {
    props: { swiper },
  };
}
