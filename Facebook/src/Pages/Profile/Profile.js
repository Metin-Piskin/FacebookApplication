import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Header from '../../Component/Headers/ProfileHeader';
import ProfilePP from '../../Component/ProfilePP';
import ProfileDetails from '../../Component/ProfileDetails';
import ProfileFriends from '../../Component/ProfileFriends';
import Composer from '../../Component/Composer';
import ProfileScroll from '../../Component/ProfileScroll';
import Post from '../../Component/Post';

const Profile = () => {
  return (
    <ScrollView style={{ backgroundColor: '#C9CCD1', flex: 1 }}>
      <Header />
      <ProfilePP />
      <ProfileDetails />
      <ProfileFriends />
      <View style={{ marginVertical: 15 }}>
        <Composer />
      </View>
      <View>
        <ProfileScroll />
      </View>
      <Post />
    </ScrollView>
  )
}

export default Profile;