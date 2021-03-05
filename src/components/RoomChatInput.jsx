import React from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const RoomChatInput = () => {
  return (
    <Box h="10%" display="flex" alignItems="center" justifyContent="center">
      <Box w="94%">
        <InputGroup size="md">
          <Input variant="filled" placeholder="Message..." py="1" size="md" />
          <InputRightElement width="4.5rem">
            <IconButton
              size="sm"
              aria-label="Search database"
              variant="unstyled"
              icon={<FiSend style={{ fontSize: '1.75em', color: 'teal' }} />}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default RoomChatInput;
