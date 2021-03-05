import React from 'react';
import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const RoomRight = () => {
  return (
    <Box h="100%" width="70%" borderRight="1px" borderColor="blackAlpha.200">
      <Box
        w="100%"
        p="3"
        h="8%"
        borderBottom="1px"
        borderColor="blackAlpha.200"
      >
        <Text fontSize="lg">Room Name</Text>
      </Box>
      <Box h="92%">
        <Box h="90%" overflowY="scroll"></Box>
        <Box h="10%" display="flex" alignItems="center" justifyContent="center">
          <Box w="94%">
            <InputGroup size="md">
              <Input
                variant="filled"
                placeholder="Message..."
                py="1"
                size="md"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  size="sm"
                  aria-label="Search database"
                  variant="unstyled"
                  icon={
                    <FiSend style={{ fontSize: '1.75em', color: 'teal' }} />
                  }
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RoomRight;
