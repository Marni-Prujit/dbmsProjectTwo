import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';

import DashBoardCard from '../components/DashBoardCard';
import CreateRoomModel from '../components/CreateRoomModel';
import JoinRoomModel from '../components/JoinRoomModel';
import DashBoardUserRoomCard from '../components/DashBoardUserRoomCard';
import { db } from '../firebase';

const DashBoard = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const rooms = [];
    const unsub = db
      .collection('rooms')
      .get()
      .then((qs) => {
        qs.docs.forEach((room) => {
          rooms.push({ roomId: room.id, ...room.data() });
        });
        setRooms(rooms);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return unsub;
  }, []);

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
        <CreateRoomModel isOpen={isOpen1} onClose={onClose1} />

        <DashBoardCard
          title="Join a room"
          icon={<ImEnter style={{ fontSize: '2em', color: 'teal' }} />}
          onClick={onOpen2}
        />
        <JoinRoomModel isOpen={isOpen2} onClose={onClose2} />
      </Flex>
      <Box mt="4">
        <Tabs colorScheme="teal">
          <TabList>
            <Tab>My Rooms</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px="0">
              {rooms.length > 0 && !loading ? (
                rooms.map((room) => (
                  <DashBoardUserRoomCard
                    roomName={room.roomName}
                    roomId={room.roomId}
                    roomAdmin={room.admin}
                    key={room.roomId}
                  />
                ))
              ) : rooms.length === 0 && loading ? (
                <Text color="gray.500">Loading...</Text>
              ) : (
                <Text fontSize="xl">No rooms</Text>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default DashBoard;
