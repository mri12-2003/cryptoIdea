import { Box, Image, Text, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <Box bgColor={'blackAlpha.700'} w={'full'} h={'85vh'}>
      <motion.div
        style={{ height: '80vh' }}
        animate={{
          translateY: '20px',
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
       
        <Flex>
          <Box p="4" bg="blackAlpha.400" w={'50vw'}>
            <Text
              fontFamily={'poppins'}
              color={'white'}
              letterSpacing={'6'}
              fontSize={'5xl'}
             px={'6'}
            >
              Begin your virtual asset journey
            </Text>
            <Text
              fontFamily={'poppins'}
              color={'whiteAlpha.800'}
              letterSpacing={'6'}
              fontSize={'3xl'}
              px={'6'}
            >
              Create account in minutes to earn exciting welcome rewards.
              <Text
                fontFamily={'poppins'}
                color={'whiteAlpha.700'}
                letterSpacing={'6'}
                fontSize={'2xl'}
                fontWeight={'thin'}
              >
                Buy and Sell cryptocurrencies.
                <Text>
                  Join the India largest crypto-asset exchange with more than
                  250 physical exchange points.
                </Text>
              </Text>
            </Text>
          </Box>
          <Spacer />
          <Image
            w={'50vw'}
            h={'full'}
            objectFit={'contain'}
            src={
              'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHw%3D&w=1000&q=80'
            }
            filter={'grayscale(1)'}
          />
        </Flex>
      </motion.div>

      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'medium'}
        color={'whiteAlpha.700'}
        mt={'10'}
      >
        Crypto_Idea
      </Text>
      <Text
        fontSize={'2xl'}
        textAlign={'center'}
        fontWeight={'light'}
        color={'whiteAlpha.700'}
      >
        It's time to get into crypto
      </Text>
    </Box>
  );
}
