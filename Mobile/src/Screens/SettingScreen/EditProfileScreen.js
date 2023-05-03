import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EditProfileSCcreen = ({ navigation }) => {
    const profile = {
        name: 'User Name',
        email: 'username@email.com',
        bio: 'Software engineer and cat lover',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png?20201213175635',
    }
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [bio, setBio] = useState(profile.bio);
    const [avatar, setAvatar] = useState(profile.avatar);


    const onSettingPress = () => {
        navigation.navigate('Setting')
    }
    const handleSubmit = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png?20201213175635' }}
                />
                <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {/* open image picker */ }}>
                    <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Bio</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Bio"
                    value={bio}
                    onChangeText={setBio}
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    handleSubmit({ name, email, bio, avatar })
                    navigation.navigate("Setting")
                }}>
                    <Text style={styles.buttonText}>Save change</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '80%',
    },
    label: {
        marginTop: 20,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#00D1FF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    avatarContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    changeAvatarButton: {
        marginTop: 10,
    },
    changeAvatarButtonText: {
        color: '#1E90FF',
        fontSize: 18,
    },
});

export default EditProfileSCcreen;