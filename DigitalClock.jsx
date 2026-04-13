import React, { useEffect, useState } from 'react';

const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

const DigitalClock = () => {
    const [time, setTime] = useState({});

    useEffect(() => {
        const updateTime = () => {
            const newTime = {};
            timeZones.forEach(zone => {
                newTime[zone] = new Date().toLocaleString('en-US', { timeZone: zone });
            });
            setTime(newTime);
        };

        updateTime(); // Initial update
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Current Time in Different Time Zones</h1>
            {timeZones.map(zone => (
                <div key={zone}>
                    <strong>{zone}:</strong> {time[zone]}
                </div>
            ))}
        </div>
    );
};

export default DigitalClock;