import React from 'react';
import { View, Text, Image } from 'react-native';

import Header from '../../Component/Headers/ProfileHeader';
import ProfilePP from '../../Component/ProfilePP';

const Profile = () => {
  return (
    <View style={{ backgroundColor: '#C9CCD1', flex: 1 }}>
      <Header />
      <ProfilePP />
    </View>
  )
}

export default Profile;