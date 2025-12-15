# SecureTalk

This is a React Native application for secure messaging.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have set up your environment for React Native development.
You can follow the official guide here: [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

You will need:

- Node.js
- Watchman (for macOS)
- React Native CLI
- A Java Development Kit (JDK)
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

### Installing

1.  Navigate to the project directory in your terminal.
2.  Install the dependencies:
    ```sh
    npm install
    ```
    or if you use Yarn:
    ```sh
    yarn install
    ```

### Running the application

Once the dependencies are installed, you can run the application on a simulator/emulator or a physical device.

#### For Android

1.  Make sure you have an Android emulator running or a device connected.
2.  Run the following command from the project root:
    ```sh
    npx react-native run-android
    ```

#### For iOS (macOS only)

1.  Navigate to the `ios` directory and install the pods:
    ```sh
    cd ios && pod install && cd ..
    ```
2.  Make sure you have an iOS simulator running or a device connected.
3.  Run the following command from the project root:
    ```sh
    npx react-native run-ios
    ```

This should start the Metro bundler and install the app on your selected device/simulator.

```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
```
