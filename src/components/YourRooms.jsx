import React from 'react';
import { Divider } from '@chakra-ui/react';

import DashBoardUserRoomCard from './DashBoardUserRoomCard';

const YourRooms = () => {
  return (
    <div>
      <DashBoardUserRoomCard
        roomName="my first room"
        onClick={console.log('clicked')}
      />
      <Divider />
      <DashBoardUserRoomCard roomName="my second room" />
      <Divider />
      <DashBoardUserRoomCard roomName="my third room" />
    </div>
  );
};

export default YourRooms;
