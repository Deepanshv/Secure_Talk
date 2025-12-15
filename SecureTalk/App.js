import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ShareQRScreen from './src/screens/ShareQRScreen';
import ScanQRScreen from './src/screens/ScanQRScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#121212',
                    },
                    headerTintColor: '#FFFFFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Secure Talk' }} />
                <Stack.Screen name="ShareQR" component={ShareQRScreen} options={{ title: 'Share QR' }} />
                <Stack.Screen name="ScanQR" component={ScanQRScreen} options={{ title: 'Scan QR' }} />
                <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;