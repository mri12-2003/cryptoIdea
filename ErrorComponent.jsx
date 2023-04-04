import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

export default function ErrorComponent({ message }) {
  return (
    <Alert
      status="error"
      position={'fixed'}
      top={'20'}
      left={'50%'}
      cursor={'pointer'}
      transform={'translateX(-50%)'}
      w={'container.lg'}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
}
