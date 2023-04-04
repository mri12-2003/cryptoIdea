import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Loader from './Loader';
import { server } from '../index';
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';

function Exchanges() {
  const [exchanges, setExchange] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?per_page=90`);
        //const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=150`);

        setExchange(data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <ErrorComponent message={'Error!! Please recheck API  '} />;
  }

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {exchanges.map(i => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={'blank'}>
    {/* bgGradient='linear(to-l, #7928CA, #FF0080)' */}
    {/* bgGradient={'linear(red.100 0%, orange.100 25%, yellow.100 50%)'} */}
    <VStack
      w={'52'}
      shadow={'lg'}
      p={'2'}
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m={'4'}
      bgGradient="linear(to-l, #AA77FF, #C9EEFF)"
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Image
        src={img}
        w={'10'}
        h={'10'}
        objectFit={'contain'}
        alt={'Exchange'}
      />

      <Heading size={'md'} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
