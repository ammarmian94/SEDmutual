import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Profile = ({navigation}) => {
  return(
    <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
        }}>Profile Screen</Text>
      </View>
  );
};

export default Profile;