import React, { useState } from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const JoinRoomModel = ({ isOpen, onClose }) => {
  const toast = useToast();
  const history = useHistory();
  const [roomId, setRoomId] = useState('');
  const { currentUser } = useAuth();

  const handleJoinRoom = async () => {
    try {
      const roomMatesQS = await db
        .collection('rooms')
        .doc(roomId)
        .collection('roomMates')
        .where('username', '==', currentUser.displayName)
        .get();

      if (!roomMatesQS.empty) {
        toast({
          title: 'Already in room',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return onClose();
      }
    } catch (err) {
      console.log(err.message);
    }

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Join a Room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="roomid">Room Id</FormLabel>
              <Input
                id="roomid"
                placeholder="Enter Room Id"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose} variant="outline">
            Close
          </Button>
          <Button variant="solid" colorScheme="green" onClick={handleJoinRoom}>
            Join
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JoinRoomModel;
