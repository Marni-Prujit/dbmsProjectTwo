import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import RoomLeft from '../components/RoomLeft';
import RoomRight from '../components/RoomRight';
import { db } from '../firebase';

const Room = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});

  useEffect(() => {
    db.collection('rooms')
      .doc(id)
      .get()
      .then((qs) => {
        setRoom(qs.data());
      });
  }, [id]);

  useEffect(() => {}, []);

  if (Object.keys(room).length === 0) {
    return <div>Loading...</div>;
  }

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
        <RoomLeft roomId={id} />
        <RoomRight roomName={room.roomName} roomId={id} />
      </Flex>
    </Box>
  );
};

export default Room;
