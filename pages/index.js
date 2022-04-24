import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Swiper from '../components/Swiper';
import { getSwiper, getMovie } from '../api';
import Movie from '../components/Movie';

export default function Home({ swiper, movie }) {
  return (
    <>
      <Head>
        <title>movie</title>
        <meta name="description" content="movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Swiper data={swiper} />
        <Movie data={movie} title="电影" />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { data: swiper } = await getSwiper();
  const { data: movie } = await getMovie();

  return {
    props: { swiper, movie },
  };
}
