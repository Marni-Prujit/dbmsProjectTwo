import React from 'react';
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
} from '@chakra-ui/react';

const JoinRoomModel = ({ isOpen, onClose, firstField }) => {
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
              <Input ref={firstField} id="roomid" placeholder="Enter Room Id" />
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose} variant="outline">
            Close
          </Button>
          <Button variant="solid" colorScheme="green">
            Join
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JoinRoomModel;
