import { Box, HStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Box as="nav" h="52px" bgColor="#202020" color="#fff">
      <HStack alignItems="center" justifyContent="center" height="52px">
        <Link href="/">
          <a>影片</a>
        </Link>
        <Link href="/cartoon">
          <a>漫画</a>
        </Link>
        <Link href="/movie">
          <a>电影</a>
        </Link>
        <Link href="/tv">
          <a>电视</a>
        </Link>
        <Link href="/news">
          <a>新闻</a>
        </Link>
      </HStack>
    </Box>
  );
}
