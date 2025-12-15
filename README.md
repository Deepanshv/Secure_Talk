# !Secure Talk

A secure and private ephemeral chat application built with React Native. Connect instantly via Session ID, chat securely, and terminate connections with one click that deletes all chat history.

## Features

- 🔐 **End-to-End Encrypted**: Messages are sent securely through Socket.IO
- 📱 **Simple Connection**: Share session IDs to connect instantly with friends
- 💬 **Real-time Chat**: Instant message delivery with socket connections
- 🗑️ **Self-Destructing**: Terminate button deletes entire chat history
- 🎨 **Modern UI**: Beautiful dark mode interface with smooth animations
- ⚡ **Fast & Lightweight**: No registration, no data storage

## Prerequisites

- Node.js (>= 20)
- React Native development environment set up
- Android Studio (for Android) or Xcode (for iOS)
- Physical device or emulator

## Installation

### 1. Install Server Dependencies

```bash
cd server
npm install
```

### 2. Install Client Dependencies

```bash
cd SecureTalk
npm install
```

> **Note**: The app now includes premium UI libraries:
> - `react-native-linear-gradient` - For gradient backgrounds and buttons
> - `@react-native-community/blur` - For glassmorphic effects

### 3. Install iOS Pods (iOS only)

```bash
cd ios
pod install
cd ..
```

## Running the Application

### Step 1: Start the Server

Open a terminal and run:

```bash
cd server
node server.js
```

You should see: `🚀 Secure Talk server listening on *:3000`

### Step 2: Configure Server IP (For Physical Devices)

If testing on a physical device, you need to update the server IP address in the app:

1. Find your computer's local IP address:
   - **Windows**: Run `ipconfig` and look for IPv4 Address
   - **Mac/Linux**: Run `ifconfig` or `ip addr`

2. Update the IP in these files:
   - `SecureTalk/src/screens/HomeScreen.tsx` (line 23)
   - `SecureTalk/src/screens/ChatScreen.tsx` (line 37)
   
   Replace `http://localhost:3000` with `http://YOUR_IP:3000` (e.g., `http://192.168.1.100:3000`)

### Step 3: Start the React Native App

Open a new terminal:

```bash
cd SecureTalk
npm start
```

### Step 4: Run on Device/Emulator

**For Android:**
```bash
npm run android
```

**For iOS:**
```bash
npm run ios
```

## How to Use

### Starting a Chat

1. **User A**: Open the app and tap "Start New Chat"
2. **User A**: Copy the Session ID
3. **User B**: Open the app and tap "Join Session"
4. **User B**: Enter User A's Session ID
5. **Both**: You're now connected! Start chatting securely

### Terminating a Chat

- Tap the 🗑️ button at the top of the chat screen
- Confirm termination
- All messages will be deleted and both users will be disconnected

## Project Structure

```
secure talk/
├── server/                 # Socket.IO server
│   ├── server.js          # Main server file
│   └── package.json       # Server dependencies
├── SecureTalk/            # React Native app
│   ├── src/
│   │   └── screens/
│   │       ├── HomeScreen.tsx      # Landing page
│   │       ├── ShareSessionScreen.tsx # Session ID display
│   │       ├── JoinSessionScreen.tsx  # Session ID input
│   │       └── ChatScreen.tsx      # Chat interface
│   ├── App.tsx            # Main app component
│   └── package.json       # App dependencies
└── README.md
```

## Troubleshooting

### Connection Issues

- Make sure the server is running before starting the app
- Check that your device and computer are on the same network
- Verify the IP address is correct in the source files
- Check firewall settings allow connections on port 3000

### Messages Not Sending

- Check server console for errors
- Verify socket connection status (green indicator in chat)
- Restart both the server and the app

## Technologies Used

- **React Native**: Mobile app framework
- **Socket.IO**: Real-time bidirectional communication
- **React Navigation**: Screen navigation
- **Express**: Server framework
- **UUID**: Session ID generation

## Security Note

This is a prototype application. For production use, consider implementing:
- Proper end-to-end encryption (e.g., Signal Protocol)
- User authentication
- Message persistence options
- Rate limiting
- HTTPS/WSS connections

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
