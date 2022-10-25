import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../Component/Headers/GroupHeader';
import GroupNew from '../../Component/GroupNew';
import Post from '../../Component/Post';

const Group = () => {
  return (
    <ScrollView style={{ backgroundColor: '#C9CCD1', flex: 1 }}>
      <Header />
      <GroupNew />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  )
}

export default Group;