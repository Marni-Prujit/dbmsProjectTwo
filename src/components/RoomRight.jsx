import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useClipboard,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

import RoomChatInput from './RoomChatInput';
import Message from './Message';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

// const msgs = [
//   'as usual',
//   'Excellent!, what about you ?',
//   'Hey Raj, how is it going Dude!',
//   'Hi, Elon',
// ];

const RoomRight = ({ roomName, roomId, roomAdmin }) => {
  const history = useHistory();
  const toast = useToast();
  const { hasCopied, onCopy } = useClipboard(roomId);
  const [msgs, setMesgs] = useState([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    const unsub = db
      .collection('roomMessages')
      .doc(roomId)
      .collection('messages')
      .orderBy('sentAt', 'desc')
      .onSnapshot((qs) => {
        setMesgs(qs.docs.map((doc) => doc.data()));
      });

    return () => {
      unsub();
    };
  }, [roomId]);

  const handleLeaveRoom = async () => {
    try {
      await db
        .collection('rooms')
        .doc(roomId)
        .collection('roomMates')
        .doc(currentUser.uid)
        .delete();

      toast({
        title: 'Exited',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      history.push('/dashboard');
    } catch (err) {
      console.log('error deleting roomate');
    }
  };

  return (
    <Box h="100%" width="70%" borderRight="1px" borderColor="blackAlpha.200">
      <Box
        w="100%"
        p="3"
        h="8%"
        borderBottom="1px"
        borderColor="blackAlpha.200"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="lg">{roomName}</Text>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={
              <BsFillGearFill style={{ color: 'teal', fontSize: '1.5rem' }} />
            }
            size="lg"
            variant="ghost"
            _hover={{
              bg: 'transparent',
            }}
          />
          <MenuList>
            <MenuItem onClick={onCopy} icon={<FaRegCopy />}>
              {hasCopied ? 'Copied' : 'Copy Room Id'}
            </MenuItem>
            {currentUser.displayName !== roomAdmin && (
              <MenuItem onClick={handleLeaveRoom} icon={<BiExit />}>
                Leave Room
              </MenuItem>
            )}
            {currentUser.displayName === roomAdmin && (
              <MenuItem
                color="red.500"
                onClick={handleLeaveRoom}
                icon={<AiFillDelete />}
              >
                Delete Room
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Box>

      <Box h="92%">
        <Box
          h="90%"
          overflowY="scroll"
          px="3"
          display="flex"
          flexDirection="column-reverse"
        >
          {msgs.map((msg) => {
            return (
              <Message
                text={msg.msg}
                isAuthUser={currentUser.displayName === msg.sender}
                key={Math.floor(Math.random() * 99999999)}
              />
            );
          })}
        </Box>
        <RoomChatInput roomId={roomId} sender={currentUser.displayName} />
      </Box>
    </Box>
  );
};

export default RoomRight;
