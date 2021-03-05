import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Message = ({ isAuthUser, text }) => {
  return (
    <>
      {isAuthUser ? (
        <Box
          bg="green.100"
          px="3"
          py="2"
          border
          ml="auto"
          borderRadius="10px"
          borderTopRightRadius="0"
          my="1"
        >
          <Text>{text}</Text>
        </Box>
      ) : (
        <Box
          px="3"
          py="2"
          border
          borderRadius="10px"
          borderTopLeftRadius="0"
          mr="auto"
          my="1"
          bg="blackAlpha.100"
        >
          <Text>{text}</Text>
        </Box>
      )}
    </>
  );
};

export default Message;
