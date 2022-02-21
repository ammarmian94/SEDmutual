import React from 'react';

import SplashScreen from 'react-native-splash-screen';

import AuthNav from './Src/Navigation/AuthNav';
const App = () => {

  React.useEffect(() => {
    SplashScreen.hide()
  },[])

  return(
    <AuthNav />
  );
};

export default App