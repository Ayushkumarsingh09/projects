import React, { useState } from 'react';
import { updateDeviceState } from '../../services/api';

function DeviceControl({ device }) {
  const [lightState, setLightState] = useState(device.state.light);
  const [fanState, setFanState] = useState(device.state.fan);
  const [miscState, setMiscState] = useState(device.state.misc);

  const handleLightChange = async () => {
    try {
      await updateDeviceState(device.device_id, { ...device.state, light: !lightState });
      setLightState(!lightState);
    } catch (error) {
      console.error('Error updating device state:', error);
    }
  };

  const handleFanChange = async () => {
    try {
      await updateDeviceState(device.device_id, { ...device.state, fan: !fanState });
      setFanState(!fanState);
    } catch (error) {
      console.error('Error updating device state:', error);
    }
  };

  const handleMiscChange = async () => {
    try {
      await updateDeviceState(device.device_id, { ...device.state, misc: !miscState });
      setMiscState(!miscState);
    } catch (error) {
      console.error('Error updating device state:', error);
    }
  };

  return (
    <div>
      <h3>{device.name}</h3>
      <label>
        Light:
        <input type="checkbox" checked={lightState} onChange={handleLightChange} />
      </label>
      <label>
        Fan:
        <input type="checkbox" checked={fanState} onChange={handleFanChange} />
      </label>
      <label>
        Miscellaneous:
        <input type="checkbox" checked={miscState} onChange={handleMiscChange} />
      </label>
    </div>
  );
}

export default DeviceControl;
