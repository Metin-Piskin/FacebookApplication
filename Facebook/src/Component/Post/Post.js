import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { PostDots } from '../Svg';

const Post = () => {
  return (
    <>
      <View style={styles.headercontainer}>

        <View style={styles.avatarcontainer}>
          <TouchableOpacity>
            <Image
              source={require('../../Assets/Avatar.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.name}>Firstname Lastname</Text>
            <View style={styles.timecontainer}>
              <Text style={styles.timetext}>8h</Text>
              <Text style={styles.timetext}>•</Text>
              <Image
                source={require('../../Assets/Globe.png')}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.Dotscontainer}>
          <PostDots />
        </TouchableOpacity>

      </View>

      <Image
        source={require('../../Assets/Avatar.png')}
        style={styles.postımage}
      />

      <View style={styles.ufıcontainer}>

        <View style={styles.blingcontainer}>
          <View style={styles.innerblingcontainer}>
            <Image
              source={require('../../Assets/Reactions.png')}
              style={styles.Reactions}
            />
            <Text>Eric Liang and 120 others</Text>
          </View>
          <Text>23 comments</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonscontainer}>
            <Image
              source={require('../../Assets/like.png')}
              style={styles.buttonsicon}
            />
            <Text style={styles.buttonstext}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonscontainer}>
            <Image
              source={require('../../Assets/comment.png')}
              style={styles.buttonsicon}
            />
            <Text style={styles.buttonstext}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonscontainer}>
            <Image
              source={require('../../Assets/share.png')}
              style={styles.buttonsicon}
            />
            <Text style={styles.buttonstext}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  )
}

export default Post;

const styles = StyleSheet.create({

  headercontainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 10
  },
  avatarcontainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 7
  },
  name: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16
  },
  timecontainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timetext: {
    marginRight: 5
  },
  Dotscontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 17
  },
  postımage: {
    maxHeight: 290,
    maxWidth: Dimensions.get('window').width,
    resizeMode: 'contain',
    backgroundColor: '#fff'
  },
  ufıcontainer: {
    backgroundColor: '#fff'
  },
  blingcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  innerblingcontainer: {
    flexDirection: 'row',
  },
  Reactions: {
    marginRight: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor:'#E4E6EB'
  },
  buttonscontainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center'
  },
  buttonsicon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  buttonstext: {
    fontWeight: '500',
    fontSize: 15
  }
})