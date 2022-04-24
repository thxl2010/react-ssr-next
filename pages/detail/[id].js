import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../../components/Layout';

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

export default function Detail() {
  return (
    <>
      <Head>
        <title>movie detail</title>
        <meta name="description" content="movie detail" />
      </Head>

      <Layout>
        <Box maxW={1200} mx="auto" mt={70}>
          <Heading as="h2" size="xl">
            Marvel Mission Recap: Captain Marvel’s Star of Hala
          </Heading>
          <Heading
            as="h3"
            size="lg"
            color="gray.500"
            fontWeight="light"
            mt="10px"
          >
            The results are out of this world!
          </Heading>
          <Divider mt="10px" />
          <Box
            mt="10px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>作者：Tomas</Text>
            <Text>发布时间：2022-01-01</Text>
          </Box>
          <Divider mt="10px" />
          <Box css={detailContainer}>
            <p>
              Congrats agents — it appears that many of you successfully
              completed the latest Marvel Mission!
            </p>
            <p>
              Congrats agents — it appears that many of you successfully
              completed the latest Marvel Mission!
            </p>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
