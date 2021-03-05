import React from 'react';
import {
  Box,
  Flex,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
  useDisclosure,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';
import DashBoardCard from '../components/DashBoardCard';
// import YourRooms from '../components/YourRooms';
import CreateRoomModel from '../components/CreateRoomModel';
import JoinRoomModel from '../components/JoinRoomModel';

const DashBoard = () => {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const firstField1 = React.useRef();
  const firstField2 = React.useRef();

  return (
    <Box p="5">
      <Flex
        p="3"
        justifyContent="space-around"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <DashBoardCard
          title="Create a room"
          icon={<FaPlus style={{ fontSize: '2em', color: 'teal' }} />}
          onClick={onOpen1}
        />
        <CreateRoomModel
          isOpen={isOpen1}
          onClose={onClose1}
          firstField={firstField1}
        />

        <DashBoardCard
          title="Join a room"
          icon={<ImEnter style={{ fontSize: '2em', color: 'teal' }} />}
          onClick={onOpen2}
        />
        <JoinRoomModel
          isOpen={isOpen2}
          onClose={onClose2}
          firstField={firstField2}
        />
      </Flex>
      <Box mt="4">
        {/* <Tabs colorScheme="teal">
          <TabList>
            <Tab>Your Rooms</Tab>
            <Tab>Active Rooms</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px="0">
              <YourRooms />
            </TabPanel>
          </TabPanels>
        </Tabs> */}
      </Box>
    </Box>
  );
};

export default DashBoard;
