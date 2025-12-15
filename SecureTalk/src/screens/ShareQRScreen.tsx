import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import * as Clipboard from 'expo-clipboard';

type ShareQRScreenRouteProp = RouteProp<RootStackParamList, 'ShareQR'>;
type ShareQRScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ShareQR'>;

type Props = {
  route: ShareQRScreenRouteProp;
  navigation: ShareQRScreenNavigationProp;
};

const ShareQRScreen: React.FC<Props> = ({ route, navigation }) => {
  const { sessionId } = route.params;

  const handleCopy = async () => {
    await Clipboard.setStringAsync(sessionId);
    Alert.alert('Copied!', 'Session ID copied to clipboard');
  };

  const handleContinue = () => {
    navigation.navigate('Chat', { sessionId });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Share Session ID</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>📋</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          Share this session ID with your friend
        </Text>

        <View style={styles.sessionIdContainer}>
          <Text style={styles.sessionIdLabel}>Session ID</Text>
          <View style={styles.sessionIdBox}>
            <Text style={styles.sessionIdText} selectable={true}>
              {sessionId}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.copyButton}
          onPress={handleCopy}
          activeOpacity={0.8}
        >
          <Text style={styles.copyButtonIcon}>📋</Text>
          <Text style={styles.copyButtonText}>Copy Session ID</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue to Chat</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Your friend can join by entering this session ID
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 40,
  },
  sessionIdContainer: {
    marginBottom: 20,
  },
  sessionIdLabel: {
    color: '#888888',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  sessionIdBox: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  sessionIdText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  copyButton: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  copyButtonIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  copyButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  continueButton: {
    backgroundColor: '#4A90E2',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  infoBox: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  infoText: {
    fontSize: 14,
    color: '#888888',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default ShareQRScreen;