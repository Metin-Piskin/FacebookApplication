import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import WatchHeader from '../../Component/Headers/WatchHeader';
import Post from '../../Component/Post';

const Watch = () => {
  return (
    <ScrollView style={{ backgroundColor: '#C9CCD1', flex: 1 }}>
      <WatchHeader />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  )
}

export default Watch;