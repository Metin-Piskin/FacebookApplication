import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Glass, Settings, More } from '../../Svg';

const MoreHeader = () => {
    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.text}>Menu</Text>
                <TouchableOpacity style={styles.Settingscontainer}>
                    <Settings />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Glasscontainer}>
                    <Glass />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.innercontainer}>
                <Image
                    source={require('../../../Assets/Avatar.png')}
                    style={styles.avatar}
                />
                <Text style={styles.nametext}>Metin Pişkin</Text>
                <TouchableOpacity style={styles.morebutton}>
                    <More />
                </TouchableOpacity>
            </TouchableOpacity>

            <View>
                <Text style={styles.extitle}>Your shortcuts</Text>
                <View style={styles.excontainer}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../Assets/Avatar.png')}
                            style={styles.avatars}
                        />
                        <Text style={styles.avatarstext}>Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../Assets/Avatar.png')}
                            style={styles.avatars}
                        />
                        <Text style={styles.avatarstext}>Name</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default MoreHeader;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        marginHorizontal: 15
    },
    text: {
        flex: 1,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 33
    },
    Settingscontainer: {
        backgroundColor: '#E4E6EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        padding: 15,
        borderRadius: 30
    },
    Glasscontainer: {
        backgroundColor: '#E4E6EB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 30
    },
    innercontainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 40,
    },
    nametext: {
        flex: 1,
        alignSelf: 'center',
        marginLeft: 10,
        color: '#000',
        fontWeight: '600',
        fontSize: 22
    },
    morebutton: {
        backgroundColor: '#E4E6EB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 18
    },
    extitle: {
        marginBottom: 15,
        color: '#000',
        fontWeight: '500',
        fontSize: 17,
        marginHorizontal: 15
    },
    excontainer: {
        flexDirection: 'row'
    },
    avatars: {
        width: 75,
        height: 75,
        borderRadius: 10,
        marginHorizontal: 15
    },
    avatarstext: {
        marginHorizontal: 30
    }
})