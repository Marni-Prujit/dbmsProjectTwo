import React, { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import { db, timestamp } from '../firebase';

const RoomChatInput = ({ roomId, sender }) => {
  const [msg, setMsg] = useState('');

  const sendMessage = async () => {
    try {
      await db
        .collection('roomMessages')
        .doc(roomId)
        .collection('messages')
        .add({
          msg,
          sender,
          sentAt: timestamp(),
        });
      setMsg('');
    } catch (err) {
      console.log('error in sending message');
    }
  };

  return (
    <Box h="10%" display="flex" alignItems="center" justifyContent="center">
      <Box w="94%">
        <InputGroup size="md">
          <Input
            variant="filled"
            placeholder="Message..."
            py="1"
            size="md"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyUp={(e) => {
              if (e.code === 'Enter') sendMessage();
            }}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              size="sm"
              aria-label="Search database"
              variant="unstyled"
              onClick={sendMessage}
              icon={<FiSend style={{ fontSize: '1.75em', color: 'teal' }} />}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default RoomChatInput;
