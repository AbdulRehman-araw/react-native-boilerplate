import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles/styles';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Profile Screen!</Text>
      <Button
        title="Go to Home Screen"
        color="blue"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

export default Profile;
