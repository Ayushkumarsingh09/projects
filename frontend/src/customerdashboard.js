import React, { useEffect, useState } from 'react';
import { getAllocatedDevices } from '../../services/api';

function CustomerDashboard() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Fetch allocated devices from backend upon component mount
    const fetchDevices = async () => {
      try {
        const response = await getAllocatedDevices();
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <ul>
        {devices.map(device => (
          <li key={device.device_id}>{device.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerDashboard;
