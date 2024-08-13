import React from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext';

function UserProfile() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return <UserContext.Provider value={userData}>
            <UserInfo />
          </UserContext.Provider>;
}

export default UserProfile;
