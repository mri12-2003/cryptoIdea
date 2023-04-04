import React from 'react';
import { Box, Stack, VStack, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
export default function Footer() {
  return (
    <Box
      bgColor={'blackAlpha.800'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['coloumn', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontweight={'bold'}>About Us </Text>
          <Text
            fontsize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
          
            <Text>A Leading Crypto Exchange</Text>
            <Text>5M+ Global Users </Text>
            <Text>500+ Listed Cryptocurrencies</Text>
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} />
          <Text>Our Founder !!</Text>
          <Text>Mr.Sharan</Text>
        </VStack>
      </Stack>
    </Box>
  );
}
