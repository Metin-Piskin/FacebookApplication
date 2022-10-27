import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Glass, Person, For, Live, Music, Follow, PostDots } from '../../Svg';

const WatchHeader = () => {
    return (
        <View style={styles.all}>
            <View style={styles.headercontainer}>
                <Text style={styles.headertext}>Watch</Text>
                <TouchableOpacity style={styles.headericoncontainer}>
                    <Person />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headericoncontainer}>
                    <Glass />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <TouchableOpacity style={styles.scrollbuttoncontainer}>
                    <For />
                    <Text style={styles.scrollbuttontex}>
                        For You
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scrollbuttoncontainer}>
                    <Live />
                    <Text style={styles.scrollbuttontex}>
                        Live
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scrollbuttoncontainer}>
                    <Music />
                    <Text style={styles.scrollbuttontex}>
                        Music
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scrollbuttoncontainer}>
                    <Follow />
                    <Text style={styles.scrollbuttontex}>
                        Follow
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                <View style={styles.textcontainer}>
                    <Text style={styles.texttitle}>New For You</Text>
                    <Text style={styles.textt}>See All</Text>
                </View>
                <View style={styles.contentcontainer}>
                    <View style={styles.livecontainer}>
                        <Image
                            source={require('../../../Assets/live.png')}
                            style={styles.live}
                        />
                    </View>
                    <Image
                        source={require('../../../Assets/Avatar.png')}
                        style={styles.avatar}
                    />
                    <Text style={styles.contenttext}>New videos from Joey and others</Text>
                    <PostDots />
                </View>
            </View>
        </View>
    )
}

export default WatchHeader;

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#fff',
        marginTop:20
    },
    headercontainer: {
        flexDirection: 'row',
        marginVertical: 5
    },
    headertext: {
        flex: 1,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 28,
        marginLeft: 15,
    },
    headericoncontainer: {
        backgroundColor: '#E4E6EB',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        padding: 9,
        borderRadius: 20
    },
    scrollbuttoncontainer: {
        flexDirection: 'row',
        backgroundColor: '#E4E6EB',
        marginLeft: 10,
        paddingHorizontal: 18,
        paddingVertical: 3,
        borderRadius: 18,
        alignItems: 'center',
        marginBottom: 10
    },
    scrollbuttontex: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5
    },
    textcontainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5
    },
    texttitle: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20,
        flex: 1
    },
    textt: {
        color: "#1877F2",
        alignSelf: 'center',
    },
    contentcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 5
    },
    contenttext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 25
    },
    livecontainer: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'red',
        padding: 3,
        borderRadius: 16,
        left:22,
        bottom:5
    },
    live: {
        tintColor: '#fff',
        width: 12,
        height: 12
    }
})