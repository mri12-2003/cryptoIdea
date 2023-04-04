import { HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
export default function Header() {
  return (
    <HStack   p={'4'} shadow={'base'} bgColor={'blackAlpha.800'}>
      <Button  marginLeft={"36"}>
        <Link to="/">Home</Link>
      </Button>
      <Button>
        <Link to="/exchanges">Exchange</Link>
      </Button>
      <Button>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
}
