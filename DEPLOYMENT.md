# Secure Talk Deployment Guide

This guide covers how to deploy the **Secure Talk** application to production.
There are two parts to deploy:
1. **Server (Backend):** Needs a public server (we'll use **Render**).
2. **App (Frontend):** Needs to be built into an APK (we'll use **Expo EAS**).

---

## Part 1: Deploying the Backend (Server)

We will use **Render** (free tier available) to host the Node.js Socket.io server.

### 1. Prepare Your Server Code
I have already updated `package.json` with the required `start` script.
Ensure your `server` folder contains:
- `server.js`
- `package.json`

### 2. Deploy to Render
1. Go to [Render.com](https://render.com) and sign up (GitHub login is best).
2. Click **New +** -> **Web Service**.
3. **Connect a Repository:** 
   - Upload your `secure-talk/server` code to a GitHub repository first.
   - Or connect your GitHub account and select the repo.
4. **Configure Settings:**
   - **Name:** `secure-talk-server` (or similar)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** Free
5. Click **Create Web Service**.

### 3. Get Your URL
Once deployed, Render will give you a URL like:
`https://secure-talk-server.onrender.com`
**Copy this URL.** You will need it for the app.

---

## Part 2: Configuring the App

Now we must tell the app to talk to the live server instead of your computer (`10.114...`).

### 1. Update `ChatScreen.tsx`
Open `src/screens/ChatScreen.tsx` and find this line (approx line 43):

```typescript
// Change this:
socket.current = io('http://10.114.112.136:3000');

// To your Render URL:
socket.current = io('https://your-render-url.onrender.com');
```

> **Note:** Render uses HTTPS, so make sure to use `https://`.

---

## Part 3: Building the Android App (APK)

We will use **EAS Build** (Expo Application Services) to create the installable file.

### 1. Install EAS CLI
Run this in your terminal:
```powershell
npm install -g eas-cli
```

### 2. Login to Expo
```powershell
eas login
```

### 3. Configure Build
Run this in the `SecureTalk` project folder:
```powershell
eas build:configure
```
- Choose **Android**.

### 4. Create the Build
To create an APK you can install on your phone:

```powershell
eas build -p android --profile preview
```

- This will upload your code to Expo's servers.
- It will take 10-20 minutes to build.
- When finished, it will give you a **Install Link** to download the APK.

---

## Summary Checklist
- [ ] Server deployed to Render
- [ ] `ChatScreen.tsx` updated with new URL
- [ ] App built using `eas build`
- [ ] APK installed on phone

**Enjoy your production Secure Talk app!**
