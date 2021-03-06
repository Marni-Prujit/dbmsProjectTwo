import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const DashBoardUserRoomCard = ({ roomName, roomId, ...props }) => {
  const history = useHistory();
  return (
    <Flex
      h="10"
      align="center"
      cursor="pointer"
      _hover={{ background: 'blackAlpha.200' }}
      transition="all 0.35s ease"
      onClick={() => history.push(`/room/${roomId}`)}
      {...props}
    >
      <Flex px="2">{roomName}</Flex>
    </Flex>
  );
};

export default DashBoardUserRoomCard;
