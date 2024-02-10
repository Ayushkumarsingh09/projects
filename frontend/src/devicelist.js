import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Fetch device data from backend upon component mount
    axios.get('/api/devices')
      .then(response => {
        setDevices(response.data);
      })
      .catch(error => {
        console.error('Error fetching devices:', error);
      });
  }, []);

  return (
    <div>
      <h2>Device Management</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>{device.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;
