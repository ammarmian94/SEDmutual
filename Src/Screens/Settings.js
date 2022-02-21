import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Settings = ({navigation}) => {
  return(
    <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
        }}>Settings Screen</Text>
      </View>
  );
};

export default Settings;