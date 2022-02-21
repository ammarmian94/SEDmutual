import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Preferences = ({navigation}) => {
  return(
    <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
        }}>Preferences Screen</Text>
      </View>
  );
};

export default Preferences;