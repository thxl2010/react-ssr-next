import { Carousel } from 'react-responsive-carousel';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Head from 'next/head';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`;

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 10px;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`;

export default function Swiper({ data }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" />
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {data.map((swiper) => (
          <CarouselItem key={swiper.id}>
            <img src={swiper.url} />
            <Box>
              <Heading>{swiper.title}</Heading>
              <Text>{swiper.description}</Text>
              <Button colorScheme="red">CHECK DETAIL</Button>
            </Box>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}
