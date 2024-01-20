import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles/styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native Home Screen!</Text>
      <Button
        title="Go to Profile Screen"
        color="blue"
        onPress={() => navigation.navigate('Profile')}></Button>
    </View>
  );
};

export default HomeScreen;
