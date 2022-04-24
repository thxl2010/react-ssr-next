import { Box, Image, HStack, Heading, Text } from '@chakra-ui/react';
import { MdMovie } from 'react-icons/md';
import Link from 'next/link';

export default function Movie({ data, title }) {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          {title}
        </Heading>
      </HStack>
      <HStack mt="20px" alignItems="flex-start">
        {data.map((movie) => (
          <Box w={290} key={movie.id}>
            <Link href="/detail/[id]" as={`/detail/${movie.vid}`}>
              <a>
                <Image src={movie.url} alt={movie.title} />
                <Text mt={10}>{movie.title}</Text>
              </a>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
