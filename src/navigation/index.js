import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth/Register';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();
const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={ {headerShown : false}} component={LoginScreen} />  
        <Stack.Screen name='Register' options={ {headerShown : false}} component={RegisterScreen} /> 
        <Stack.Screen name="Tab" component={TabNav} options={{headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes
