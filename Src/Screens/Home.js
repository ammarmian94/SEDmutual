import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Home = ({navigation}) => {
  return(
    <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
        }}>Home Screen</Text>
      </View>
  );
};

export default Home;