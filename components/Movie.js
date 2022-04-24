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

export default function Movie() {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          电影
        </Heading>
      </HStack>
      <HStack>
        <Box w={290}>
          <Image src="/images/item_1.jpg" />
          <Text mt={10}>
            Marvel Mission Recap: Captain Marvel’s Star of Hala
          </Text>
        </Box>
        <Box w={290}>
          <Image src="/images/item_1.jpg" />
          <Text mt={10}>
            Marvel Mission Recap: Captain Marvel’s Star of Hala
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
