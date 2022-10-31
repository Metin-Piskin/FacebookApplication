import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Camera, PostDots, Pen, Plus } from '../Svg';

const ProfilePP = () => {
    return (
        <View>
            <View
                style={styles.innercontainer}
            >
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={{
                        height: 150,
                    }}
                />

            </View>


            <TouchableOpacity style={styles.avatarcontainer}>
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.cameracontainer}>
                    <Camera />
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={styles.editcontainer}>
                <Text style={styles.name}>Metin Pişkin</Text>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.Addbutton}>
                        <View style={styles.pluscontainer}>
                            <Plus />
                        </View>
                        <Text style={styles.Addtext}>Add to story</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Editbutton}>
                        <View style={styles.pencontainer}>
                            <Pen />
                        </View>
                        <Text style={styles.Edittext}>Edit profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PostDotsbutton}>
                        <PostDots />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfilePP

const styles = StyleSheet.create({
    innercontainer: {
        height: 150,
        backgroundColor: "#1877F2",
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        color: "#fff",
        marginTop: 45
    },
    avatarcontainer: {
        backgroundColor: '#fff',
        width: 110,
        height: 110,
        borderRadius: 60,
        marginTop: -70,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cameracontainer: {
        position: 'absolute',
        backgroundColor: '#E4E6EB',
        bottom: 0,
        right: -5,
        padding: 5,
        borderRadius: 15
    },
    editcontainer: {
        backgroundColor: '#fff',
        paddingTop: 40,
        marginTop: -39,
        paddingHorizontal: 15,
    },
    name: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25
    },
    buttoncontainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginBottom: 15
    },
    Addbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: "#1877F2",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5
    },
    pluscontainer: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 20,
        marginRight: 3
    },
    Addtext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    Editbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#E4E6EB',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5
    },
    pencontainer: {
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Edittext: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600'
    },
    PostDotsbutton: {
        backgroundColor: '#E4E6EB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 5,
        marginLeft: 3
    }
})