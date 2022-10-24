import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';

import Header from '../../Component/Header';
import Composer from '../../Component/Composer';
import AddStorie from '../../Component/AddStorie';
import Stories from '../../Component/Stories';
import Post from '../../Component/Post';

const Home = () => {
    return (
        <ScrollView style={{ backgroundColor: '#C9CCD1', flex: 1 }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <Header />
            <Composer />
            <ScrollView
                horizontal
                style={{
                    backgroundColor: '#fff',
                    maxHeight: 200,
                    marginTop: 10,
                    
                }}
            >
                <AddStorie />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
            </ScrollView>
            <Post />
            <Post />
        </ScrollView>
    )
}

export default Home;

