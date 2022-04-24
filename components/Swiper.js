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

export default function Swiper() {
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
        <CarouselItem>
          <img src="/images/1.jpg" />
          <Box>
            <Heading>KING IN BLACK</Heading>
            <Text>哈哈哈</Text>
            <Button>CHECK DETAIL</Button>
          </Box>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/2.jpg" />
          <Box>
            <Heading>test</Heading>
            <Text>666</Text>
            <Button>14124312</Button>
          </Box>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/3.jpg" />
          <Box>
            <Heading>333333333333</Heading>
            <Text>333</Text>
            <Button>333333</Button>
          </Box>
        </CarouselItem>
      </Carousel>
    </>
  );
}
