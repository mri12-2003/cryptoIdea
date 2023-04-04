import {
  Box,
  Container,
  HStack,
  VStack,
  Radio,
  RadioGroup,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from '@chakra-ui/react';
import Loader from './Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';
import Graph from './Graph';

const CoinDetail = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState('24h');

  const [chartArray, setChartArray] = useState([]);

  const params = useParams();
  const btns = ['24h', '7d', '14d', '30d', '60d', '365d'];

  const switchChartStats = value => {
    switch (value) {
      case '24h':
        setDays('24h');
        setLoading(true);
        break;
      case '7d':
        setDays('7d');
        setLoading(true);
        break;
      case '14h':
        setDays('14h');
        setLoading(true);
        break;
      case '30d':
        setDays('30d');
        setLoading(true);
        break;
      case '60d':
        setDays('60d');
        setLoading(true);
        break;
      case '365d':
        setDays('365d');
        setLoading(true);
        break;

      default:
        setDays('24h');
        setLoading(true);
        break;
    }
  };

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);
  if (error) {
    return <ErrorComponent message={'Sorry,Please recheck Coins API'} />;
  }

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={'full'} borderWidth={1}>
            <Graph arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

          <HStack p={'4'} wrap={'wrap'}>
          {/* <HStack p={'4'} overflowX={'auto'} */}
            {btns.map(i => (
              <Button
                key={i}
                onClick={() => {
                  switchChartStats(i);
                }}
              >
                {i}
              </Button>
            ))}
          </HStack>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'inr'}> INR</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EURO</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
            <Text fontSize={'2xl'} alignSelf={'center'} opacity={'0.7'}>
              Last Updated on 
              {Date(coin.market_data.last_updated).split('G')[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={'36'}
              h={'36'}
              objectFit={'contain'}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>

              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? 'increase'
                      : 'decrease'
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>
              {`#${coin.market_cap_rank}`}
            </Badge>

            {/* <CustomBar high={"232"} low={"40"} /> */}
            <CustomBar
              high={`${coin.market_data.high_24h[currency]}`}
              low={`${coin.market_data.low_24h[currency]}`}
            />

            <Box w={'full'} p={'4'}>
              <Item
                title={'Max Supply'}
                value={coin.market_data.max_supply}
              ></Item>
              <Item
                title={'circulating Supply'}
                value={coin.market_data.circulating_supply}
              ></Item>
              <Item
                title={'Market Cap'}
                value={`${coin.market_data.market_cap[currency]}`}
              ></Item>
              <Item
                title={'All Time high'}
                value={`${coin.market_data.ath[currency]}`}
              ></Item>
              <Item
                title={'All Time low'}
                value={`${coin.market_data.atl[currency]}`}
              ></Item>
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontFamily={'Poppins'} letterSpacing={'wider'}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge fontSize={'2xl'} children={low} colorScheme={'red'}></Badge>
      <Text fontSize={'2xl'}> 24 hour range </Text>
      <Badge fontSize={'2xl'} children={high} colorScheme={'green'}></Badge>
    </HStack>
  </VStack>
);
export default CoinDetail;
