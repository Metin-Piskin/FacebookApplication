import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileFriends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titletext}>Friends</Text>
        <Text style={styles.titletextone}>Find Friends</Text>
      </View>
      <Text style={styles.titletexttwo}>999 friends</Text>
      <View style={styles.avatarcontainer}>
        <View>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.avatartitle}>Name</Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.avatartitle}>Name</Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.avatartitle}>Name</Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.avatartitle}>Name</Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.avatartitle}>Name</Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.avatartitle}>Name</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.allbutton}>
        <Text style={styles.allbuttontext}>See all friends</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileFriends;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titletext: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 20
  },
  titletextone: {
    color: "#1877F2",
    fontSize: 20,
    alignSelf: 'center',
    marginRight: 20
  },
  titletexttwo: {
    fontSize: 18,
    marginLeft: 20
  },
  avatarcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5
  },
  avatartitle: {
    color: '#000',
    fontWeight: '500',
    alignSelf: 'center'
  },
  allbutton: {
    alignItems: 'center',
    backgroundColor: '#E4E6EB',
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 5
  },
  allbuttontext: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    paddingVertical: 10
  },
})