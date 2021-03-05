import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';

const RoomLeft = () => {
  return (
    <Box h="100%" width="30%" borderRight="1px" borderColor="blackAlpha.200">
      <Box
        w="100%"
        p="3"
        h="8%"
        borderBottom="1px"
        borderColor="blackAlpha.200"
      >
        <Text fontSize="lg">RoomMates</Text>
      </Box>
      <Box px="4" overflowY="scroll" h="92%">
        <Text py="2">User 1</Text>
        <Divider />
        <Text py="2">User 1</Text>
        <Divider />
        <Text py="2">User 1</Text>
        <Divider />
        <Text py="2">User 1</Text>
        <Divider />
        <Text py="2">User 1</Text>
        <Divider />
        <Text py="2">User 1</Text>
        <Divider />
      </Box>
    </Box>
  );
};

export default RoomLeft;
