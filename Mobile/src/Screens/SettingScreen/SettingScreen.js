import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const SettingScreen = ({ navigation }) => {

  const data = [
    { id: 1, icon: "home", title: 'My Profile', onPress: () => navigation.navigate('EditProfile') },
    { id: 2, icon: "notifications", title: 'Notification', onPress: () => navigation.navigate('Notification') },
    { id: 3, icon: 'account-circle', title: 'Change Password', onPress: () => navigation.navigate('ChangePassword') },
    { id: 4, icon: 'support', title: 'Support', onPress: () => navigation.navigate('Support') },
    { id: 5, icon: 'power-settings-new', title: 'Sign out', onPress: () => navigation.navigate('SignOut') },
  ]

  const [options, setOptions] = useState(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png?20201213175635' }}
          />
          <Text style={styles.username}>User name</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={options}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.onPress}>
                <View style={styles.box}>
                  <MaterialIcons style={styles.icon} name={item.icon} size={40} />
                  {/* <Image style={styles.icon} source={{ uri: item.image }} /> */}
                  <Text style={styles.title}>{item.title}</Text>
                  <Image
                    style={styles.btn}
                    source={{ uri: 'https://img.icons8.com/customer/office/40' }}
                  />
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2A2A37',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FF6347',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    marginLeft: 4,
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#ffffff',
    fontSize: 32,
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: 'bold',
  },
})

export default SettingScreen;
