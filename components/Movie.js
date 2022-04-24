import {
  Box,
  Container,
  Button,
  Image,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { MdMovie } from 'react-icons/md';

export default function Movie({ data, title }) {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          {title}
        </Heading>
      </HStack>
      <HStack alignItems="flex-start">
        {data.map((movie) => (
          <Box w={290} key={movie.id}>
            <Image src={movie.url} />
            <Text mt={10}>{movie.title}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
