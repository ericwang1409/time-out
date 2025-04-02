"use client";

import React, { useState, useEffect } from 'react';
import BreakReminder from './breakPage';
import { stringify } from 'querystring';

export default function ClientBreakReminder() {
  const [showBreakReminder, setShowBreakReminder] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowBreakReminder(true);
    }, 10); // Display the reminder every 20 minutes
    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setShowBreakReminder(false);
    console.log("Break reminder is visible: fdsfd ", showBreakReminder)
  };

  return (
    <div>
          <BreakReminder isVisible={showBreakReminder} onClose={handleClose} />
    </div>
  );
}
