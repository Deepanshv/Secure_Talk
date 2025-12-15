import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type JoinSessionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JoinSession'>;

type Props = {
  navigation: JoinSessionScreenNavigationProp;
};

const JoinSessionScreen: React.FC<Props> = ({ navigation }) => {
  const [sessionId, setSessionId] = useState('');

  const handleJoin = () => {
    if (sessionId.trim().length > 0) {
      console.log('Joining session:', sessionId);
      navigation.navigate('Chat', { sessionId: sessionId.trim() });
    } else {
      Alert.alert('Invalid Session ID', 'Please enter a valid session ID.');
    }
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
        <Text style={styles.title}>Join Session</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>🔗</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          Enter the session ID shared by your friend
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={sessionId}
            onChangeText={setSessionId}
            placeholder="Enter Session ID"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity
          style={[styles.joinButton, !sessionId.trim() && styles.joinButtonDisabled]}
          onPress={handleJoin}
          disabled={!sessionId.trim()}
          activeOpacity={0.8}
        >
          <Text style={styles.joinButtonText}>Join Chat</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Ask your friend to share their session ID
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 18,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#3a3a3a',
    textAlign: 'center',
  },
  joinButton: {
    backgroundColor: '#4A90E2',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  joinButtonDisabled: {
    backgroundColor: '#3a3a3a',
  },
  joinButtonText: {
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

export default JoinSessionScreen;