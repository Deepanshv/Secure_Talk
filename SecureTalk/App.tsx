/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ShareSessionScreen from './src/screens/ShareSessionScreen';
import JoinSessionScreen from './src/screens/JoinSessionScreen';
import ChatScreen from './src/screens/ChatScreen';

export type RootStackParamList = {
  Home: undefined;
  ShareSession: { sessionId: string };
  JoinSession: undefined;
  Chat: { sessionId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ShareSession" component={ShareSessionScreen} />
          <Stack.Screen name="JoinSession" component={JoinSessionScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
