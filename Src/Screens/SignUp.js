import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

const SignUp = ({navigation}) => {
  return(
    <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
        }}>SignUp Screen</Text>
        <Button title='Log In'
        onPress={() => navigation.navigate('Login')}/>
      </View>
  );
};

export default SignUp;