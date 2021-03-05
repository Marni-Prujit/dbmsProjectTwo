import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import RoomLeft from '../components/RoomLeft';
import RoomRight from '../components/RoomRight';

const Room = () => {
  return (
    <Box h="91vh" display="flex" alignItems="center">
      <Flex
        width="90%"
        m="auto"
        height="97%"
        border="1px"
        borderRadius="3px"
        borderColor="blackAlpha.200"
      >
        <RoomLeft />
        <RoomRight />
      </Flex>
    </Box>
  );
};

export default Room;
