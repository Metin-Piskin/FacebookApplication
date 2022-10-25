import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { PostDots } from '../Svg';

const GroupNew = () => {
    return (
        <View style={styles.all}>
            <View style={styles.titlecontainer}>
                <Text style={styles.titlebir}>New for You</Text>
                <Text style={styles.titleiki}>See All (4)</Text>
            </View>
            <View style={styles.textallcontainer}>
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={styles.avatar}
                />
                <View style={styles.textcontainer}>
                    <View>
                        <Text>Rising in Washington Campers</Text>
                        <View style={styles.textinnercontainer}>
                            <Text style={styles.textm}>
                                <Text style={styles.nametext}>Metin Pişkin </Text>
                                posted:"There must
                                be something going on..."
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.PostDotscontainer}>
                    <PostDots />
                </View>
            </View>
            <View style={styles.Reactionscontainer}>
                <Image
                    source={require('../../Assets/Reactions.png')}
                    style={styles.Reactions}
                />
                <Text> 1.7K </Text>
                <Text>•</Text>
                <Text> 30 Comments </Text>
                <Text>•</Text>
                <Text> 1 hr</Text>
            </View>
        </View>
    )
}

export default GroupNew;

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#fff',
        marginTop: 10
    },
    titlecontainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    titlebir: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },
    titleiki: {
        color: "#1877F2",
        alignSelf: 'center'
    },
    textallcontainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 10
    },
    textcontainer: {
        flexDirection: 'row'
    },
    textinnercontainer: {
        flexDirection: 'row',

    },
    nametext: {
        color: '#000',
        fontWeight: 'bold'
    },
    textm: {
        flex: 1,
        color: '#000'
    },
    PostDotscontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    Reactionscontainer: {
        flexDirection: 'row',
        marginLeft: 75,
        marginTop: -5,
        marginBottom: 5
    }
})