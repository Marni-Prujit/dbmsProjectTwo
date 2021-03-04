import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ImEnter } from 'react-icons/im';
import { FaPlus } from 'react-icons/fa';

const DashBoard = () => {
  return (
    <Box p="5">
      <Flex h="500px" p="3" justifyContent="space-around">
        <Flex
          boxShadow="lg"
          _hover={{
            boxShadow: 'xl',
          }}
          bg="blackAlpha.100"
          w="35%"
          h="50%"
          m="4"
          p="2"
          borderRadius="md"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <FaPlus style={{ fontSize: '2em', color: 'teal' }} />
          <Text mt="6" fontSize="3xl">
            Create a room
          </Text>
        </Flex>
        <Flex
          boxShadow="lg"
          _hover={{
            boxShadow: 'xl',
          }}
          bg="blackAlpha.100"
          w="35%"
          h="50%"
          m="4"
          p="2"
          borderRadius="md"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <ImEnter style={{ fontSize: '2em', color: 'teal' }} />
          <Text mt="6" fontSize="3xl">
            Join a room
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashBoard;
