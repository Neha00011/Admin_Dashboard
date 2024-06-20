import React, { useState, useEffect } from "react";

const IndianTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const indianTime = time.toLocaleString("en-US", options);

  return (
    <div>
      <p>{indianTime}</p>
    </div>
  );
};

export default IndianTime;
