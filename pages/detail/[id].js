import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { getVideos, getMovieDetail } from '../../api';

const detailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`;

export default function Detail({ detail }) {
  return (
    <>
      <Head>
        <title>movie detail</title>
        <meta name="description" content="movie detail" />
      </Head>

      <Layout>
        <Box maxW={1200} mx="auto" mt={70}>
          <Heading as="h2" size="xl">
            {detail.title}
          </Heading>
          <Heading
            as="h3"
            size="lg"
            color="gray.500"
            fontWeight="light"
            mt="10px"
          >
            {detail.sub}
          </Heading>
          <Divider mt="10px" />
          <Box
            mt="10px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>作者：{detail.author}</Text>
            <Text>发布时间：{detail.publish}</Text>
          </Box>
          <Divider mt="10px" />
          <Box
            css={detailContainer}
            dangerouslySetInnerHTML={{ __html: detail.content }}
          />
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // ['1', '2']
  const { data } = await getVideos();

  const paths = data.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data: detail } = await getMovieDetail({ id });

  return {
    props: { detail },
  };
}
