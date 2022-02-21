import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const Login = ({navigation}) => {
  return(
    <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
        }}>Login Screen</Text>
        <Button title='Sign Up'
        onPress={() => navigation.navigate('SignUp')} />
        <Button title='Log In'
        onPress={() => navigation.navigate('Home')}/>
      </View>
  );
};

export default Login;