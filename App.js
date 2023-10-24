
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';

const Stack = createStackNavigator();
const App = () => {
   return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="First" component={FirstPage} options={{headerShown: false}}  />
          <Stack.Screen name="Second" component={SecondPage} options={{headerShown: false}} />
          <Stack.Screen name="Third" component={ThirdPage} options={{headerShown: false}} />
          <Stack.Screen name="FourthPage"  component={FourthPage} options={{headerShown: false}}/>
      </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;



