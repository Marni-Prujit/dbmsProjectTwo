import React from 'react';
import { Flex } from '@chakra-ui/react';

const DashBoardUserRoomCard = ({ roomName, ...props }) => {
  return (
    <Flex
      h="10"
      align="center"
      cursor="pointer"
      _hover={{ background: 'blackAlpha.200' }}
      transition="all 0.35s ease"
      {...props}
    >
      <Flex px="2">{roomName}</Flex>
    </Flex>
  );
};

export default DashBoardUserRoomCard;
