import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';
import DashBoardCard from '../components/DashBoardCard';

const DashBoard = () => {
  return (
    <Box p="5">
      <Flex
        h="500px"
        p="3"
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <DashBoardCard
          title="Create a room"
          icon={<FaPlus style={{ fontSize: '2em', color: 'teal' }} />}
        />
        <DashBoardCard
          title="Join a room"
          icon={<ImEnter style={{ fontSize: '2em', color: 'teal' }} />}
        />
      </Flex>
    </Box>
  );
};

export default DashBoard;
