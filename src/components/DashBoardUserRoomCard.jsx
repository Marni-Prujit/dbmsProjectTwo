import React from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

const DashBoardUserRoomCard = ({ roomName, roomId, roomAdmin, ...props }) => {
  const history = useHistory();
  const toast = useToast();
  const { currentUser } = useAuth();

  const handleJoinRoom = async () => {
    //? THIS TRY CHEKS IF YOU ARE ALREADY IN ROOM
    //? IF YOU ARE ALREADY IN ROOM THEN JUST JOIN
    try {
      const roomMatesQS = await db
        .collection('rooms')
        .doc(roomId)
        .collection('roomMates')
        .where('username', '==', currentUser.displayName)
        .get();

      if (!roomMatesQS.empty) {
        history.push(`/room/${roomId}`);
        return;
      }
    } catch (err) {
      console.log(err.message);
    }
    // ? ADDS YOU TO ROOMMATES COLLECTIONS OF THE ROOM
    try {
      await db
        .collection('rooms')
        .doc(roomId)
        .collection('roomMates')
        .doc(currentUser.uid)
        .set({ username: currentUser.displayName });

      history.push(`/room/${roomId}`);
      toast({
        title: 'Joined room',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.log('error in joining room');
    }
  };

  return (
    <Flex
      h="10"
      align="center"
      cursor="pointer"
      _hover={{ background: 'blackAlpha.200' }}
      transition="all 0.35s ease"
      onClick={() => handleJoinRoom()}
      {...props}
    >
      <Flex px="2" justifyContent="space-between" alignItems="center">
        <Text mr="10">{roomName}</Text>
        {currentUser.displayName === roomAdmin && (
          <Text color="gray.500" fontSize="sm">
            You are admin
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default DashBoardUserRoomCard;
