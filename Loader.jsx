import { Box, Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Loader() {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="md"
        ></Spinner>
      </Box>
    </VStack>
  );
}
