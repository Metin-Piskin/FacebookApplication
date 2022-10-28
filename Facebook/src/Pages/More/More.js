import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../Component/Headers/MoreHeader';
import MorePost from '../../Component/MorePost';

import { Friends, Groups, Watch } from '../../Component/Svg';

const More = () => {
  return (
    <ScrollView>
      <Header />
      <Text
        style={{
          marginBottom: 15,
          color: '#000',
          fontWeight: '500',
          fontSize: 17,
          marginHorizontal: 15,
          marginVertical: 15
        }}
      >
        All shortcuts
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <MorePost
          title='Feeds'
          icon={<Friends />}
        />
        <MorePost
          title='Friends'
          icon={<Friends />}
        />
        <MorePost
          title='Groups'
          icon={<Groups />}
        />
        <MorePost
          title='Marketplace'
          icon={<Friends />}
        />
        <MorePost
          title='Videos on Watch'
          icon={<Watch />}
        />
        <MorePost
          title='Memories'
          icon={<Friends />}
        />
        <MorePost
          title='Saved'
          icon={<Friends />}
        />
        <MorePost
          title='Pages'
          icon={<Friends />}
        />
      </View>

    </ScrollView>
  )
}

export default More;