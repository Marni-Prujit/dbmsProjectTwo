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
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const CreateRoomModel = ({ isOpen, onClose, firstField }) => {
  const history = useHistory();
  const toast = useToast();
  const [data, setData] = useState({ roomName: '' });
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const createRoom = async () => {
    setLoading((loading) => !loading);
    const roomData = {
      roomName: data.roomName,
      admin: currentUser.displayName,
    };
    try {
      const room = await db.collection('rooms').add(roomData);
      await db
        .collection('rooms')
        .doc(room.id)
        .collection('roomMates')
        .doc(currentUser.uid)
        .set({ username: currentUser.displayName });

      toast({
        title: 'Joined room',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      history.push(`/room/${room.id}`);
    } catch (err) {
      console.log('error in creating a room or joining a room');
    }

    setLoading((loading) => !loading);
    onClose();
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
        <ModalHeader>Create a Room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="roomname">Room Name</FormLabel>
              <Input
                ref={firstField}
                id="roomname"
                placeholder="Enter the room name"
                value={data.roomName}
                onChange={(e) => setData({ ...data, roomName: e.target.value })}
              />
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose} variant="outline">
            Close
          </Button>
          <Button
            variant="solid"
            colorScheme="green"
            onClick={createRoom}
            isLoading={loading}
            loadingText="Creating..."
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRoomModel;
