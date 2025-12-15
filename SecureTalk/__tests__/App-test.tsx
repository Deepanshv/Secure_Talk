/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Text, View } from 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Helper to create mock components for screens
const createMockScreen = (name: string) => () =>
  (
    <View>
      <Text>{name}</Text>
    </View>
  );

// Mock screen components to isolate App.tsx for testing
jest.mock('../src/screens/HomeScreen', () => createMockScreen('HomeScreen'));
jest.mock('../src/screens/ShareQRScreen', () =>
  createMockScreen('ShareQRScreen'),
);
jest.mock('../src/screens/ScanQRScreen', () =>
  createMockScreen('ScanQRScreen'),
);
jest.mock('../src/screens/ChatScreen', () => createMockScreen('ChatScreen'));

// Mock react-native-safe-area-context to avoid issues in test environment
jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the HomeScreen initially', () => {
  const component = renderer.create(<App />);
  const homeScreenText = component.root
    .findAllByType(Text)
    .find(el => el.props.children === 'HomeScreen');
  expect(homeScreenText).toBeDefined();
});
