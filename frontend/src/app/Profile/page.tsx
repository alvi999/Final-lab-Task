"use client"
import React, { useEffect, useState } from 'react';

const ProfilePage: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const userEmailFromStorage = sessionStorage.getItem('userEmail');
    if (userEmailFromStorage) {
      setUserEmail(userEmailFromStorage);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-extrabold text-center mb-4">Profile Page</h1>
          <p className="text-lg font-semibold text-center">Email: {userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;