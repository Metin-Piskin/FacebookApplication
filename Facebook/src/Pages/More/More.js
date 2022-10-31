import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from '../../Component/Headers/MoreHeader';
import MorePost from '../../Component/MorePost';

import { Friends, Groups, Watch, Reels, Memories, Gaming, More } from '../../Component/Svg';

const Morescreen = () => {
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
          icon={
            <Image
              source={require('../../Assets/Feeds.png')}
              style={{
                width: 35,
                height: 35
              }}
            />
          }
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
          icon={
            <Image
              source={require('../../Assets/Market.png')}
              style={{
                width: 35,
                height: 35
              }}
            />
          }
        />
        <MorePost
          title='Videos on Watch'
          icon={<Watch />}
        />
        <MorePost
          title='Memories'
          icon={<Memories />}
        />
        <MorePost
          title='Saved'
          icon={
            <Image
              source={require('../../Assets/Saved.png')}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'center'
              }}
            />
          }
        />
        <MorePost
          title='Pages'
          icon={
            <Image
              source={require('../../Assets/Pages.png')}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'center'
              }}
            />
          }
        />
        <MorePost
          title='Reels'
          icon={<Reels />}
        />
        <MorePost
          title='Events'
          icon={<Image
            source={require('../../Assets/Events.png')}
            style={{
              width: 35,
              height: 35,
              resizeMode: 'center'
            }}
          />}
        />
        <MorePost
          title='Gaming'
          icon={<Gaming />}
        />
        <MorePost
          title='Stories'
          icon={
            <Image
              source={require('../../Assets/Stories.png')}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'center'
              }}
            />
          }
        />
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E4E6EB',
            borderRadius: 5
          }}
        >
          <Text
            style={{
              paddingVertical: 10,
              alignSelf: 'center',
              color: '#000',
              fontWeight: '500'
            }}
          >
            See more
          </Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopWidth: 1,
              borderColor: '#E4E6EB'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Image
                source={require('../../Assets/soruişareti.png')}
                style={{
                  width: 40,
                  height: 40
                }}
              />
              <Text
                style={{
                  color: '#000',
                  fontWeight: '500',
                  marginLeft: 10
                }}
              >Help & support</Text>
            </View>
            <More />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopWidth: 1,
              borderColor: '#E4E6EB'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Image
                source={require('../../Assets/çark.png')}
                style={{
                  width: 40,
                  height: 40
                }}
              />
              <Text
                style={{
                  color: '#000',
                  fontWeight: '500',
                  marginLeft: 10
                }}
              >Settings & privacy</Text>
            </View>
            <More />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#E4E6EB',
            borderRadius: 5
          }}
        >
          <Text
            style={{
              paddingVertical: 10,
              alignSelf: 'center',
              color: '#000',
              fontWeight: '500'
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Morescreen;