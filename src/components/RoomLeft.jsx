import React, { useEffect, useState } from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';
import { db } from '../firebase';

const RoomLeft = ({ roomId }) => {
  const [roomMates, setRoomMates] = useState([]);
  useEffect(() => {
    const unsub = db
      .collection('rooms')
      .doc(roomId)
      .collection('roomMates')
      .onSnapshot((qs) => {
        let mates = [];
        mates = qs.docs.map((doc) => ({
          uid: doc.id,
          username: doc.data().username,
        }));
        setRoomMates(mates);
      });

    return () => {
      unsub();
    };
  }, [roomId]);

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
        {roomMates.length > 0 &&
          roomMates.map((mate) => {
            return (
              <div key={mate.uid}>
                <Box key={mate.uid} py="2" d="flex" flexDirection="column">
                  <Text>{mate.username}</Text>
                </Box>
                <Divider />
              </div>
            );
          })}
      </Box>
    </Box>
  );
};

export default RoomLeft;
