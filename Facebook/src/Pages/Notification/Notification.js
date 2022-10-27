import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import NotificationHeader from '../../Component/Headers/NotificationHeader';
import NotificationPost from '../../Component/NotificationPost';
import NotificationKnow from '../../Component/NotificationKnow';

const Notification = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NotificationHeader />
      <Text style={styles.text}>New</Text>
      <NotificationPost />
      <NotificationPost />

      <NotificationKnow />

      <Text style={styles.text}>Earlier</Text>
      <NotificationPost />
      <NotificationPost />
      <NotificationPost />
      <NotificationPost />
    </ScrollView>
  )
}

export default Notification;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 10
  }
})