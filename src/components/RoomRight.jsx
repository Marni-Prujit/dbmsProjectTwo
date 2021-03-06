import React from 'react';
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useClipboard,
  IconButton,
} from '@chakra-ui/react';
import { FaRegCopy } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';

import RoomChatInput from './RoomChatInput';
import Message from './Message';

const msgs = [
  'as usual',
  'Excellent!, what about you ?',
  'Hey Raj, how is it going Dude!',
  'Hi, Elon',
];

const RoomRight = ({ roomName, roomId }) => {
  const { hasCopied, onCopy } = useClipboard(roomId);

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
            <MenuItem icon={<BiExit />}>Leave Room</MenuItem>
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
                text={msg}
                isAuthUser
                key={Math.floor(Math.random() * 99999)}
              />
            );
          })}
        </Box>
        <RoomChatInput />
      </Box>
    </Box>
  );
};

export default RoomRight;
