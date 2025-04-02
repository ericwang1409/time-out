"use client";

import React from 'react';

const BreakReminder = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="text-center text-white p-5 rounded-lg bg-gray-800 bg-opacity-80">
        <h1 className="text-2xl font-bold mb-4">Take a Break</h1>
        <button
          onClick={onClose}
          className="text-lg px-4 py-2 rounded bg-white text-black font-medium hover:bg-gray-200"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default BreakReminder;