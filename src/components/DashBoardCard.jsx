import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const DashBoardCard = (props) => {
  return (
    <Flex
      boxShadow="lg"
      _hover={{
        boxShadow: 'xl',
      }}
      bg="blackAlpha.100"
      w={['100%', '100%', '40%', '35%']}
      h="50%"
      m="4"
      p="2"
      borderRadius="md"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      textAlign="center"
      {...props}
    >
      {props.icon}

      <Text mt="6" fontSize="3xl">
        {props.title}
      </Text>
    </Flex>
  );
};

export default DashBoardCard;
