import React, { useState } from 'react';
import { createRoom } from '../../services/api';

function RoomForm() {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRoom({ roomName });
      setRoomName('');
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div>
      <h2>Create Room</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder="Room Name" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default RoomForm;
