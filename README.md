# The Slice — Worthington

> Approachable golf, multisport games, great food, and a laid-back vibe in Worthington.

[![Web App](https://img.shields.io/badge/Web_App-Live-02C5FB?style=for-the-badge&logo=google-chrome&logoColor=black)](http://localhost:3000)
[![Direct APK Download](https://img.shields.io/badge/Download_APK-v1.0.0-success?style=for-the-badge&logo=android&logoColor=white)](https://github.com/rajeetcodeN/thesliceworthingtonapp/raw/main/apk/The-Slice-v1.0.0.apk)
[![Android App](https://img.shields.io/badge/Android_App-Capacitor_8-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://github.com/rajeetcodeN/thesliceworthingtonapp/releases)

---

## 📱 Download the Android App

You can install the native Android APK for **The Slice**:

### 📥 [Click Here to Download The-Slice-v1.0.0.apk](https://github.com/rajeetcodeN/thesliceworthingtonapp/raw/main/apk/The-Slice-v1.0.0.apk)

#### Quick Installation Steps:
1. Tap the download link above on your Android phone (or download on PC and transfer to your device).
2. Open the downloaded `The-Slice-v1.0.0.apk` file.
3. If prompted, allow **"Install from unknown sources"** in Android Settings.
4. Tap **Install** and enjoy **The Slice** app!

---

### 🛠️ Or Build from Source:
```bash
# 1. Install dependencies & build web assets
npm install
npm run cap:sync

# 2. Open in Android Studio
npm run cap:open:android
```
In Android Studio, click **Build > Build Bundle(s) / APK(s) > Build APK(s)** to generate your own `The-Slice-v1.0.0.apk`.

---

## ✨ Features

- **Golf Simulator Bay Booking**: Seamless booking integration with Whoosh.
- **Dynamic Mobile Experience**: Full-screen video hero with smooth responsive layout and zero-scroll viewport fitting.
- **Interactive Button Roll**: Tactile 3D text and arrow flip animations designed for both desktop hover and mobile touch.
- **Multisport Games & Leagues**: Full details on simulator games, leagues, and high-tech tracking.
- **Native Android Shell**: Built with **Capacitor 8**, featuring native Chrome Custom Tabs, hardware back button routing, dark status bar, and adaptive vector launcher icons.
- **PWA Ready**: Offline support and home screen installation capabilities for iOS and Android web users.

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, TanStack Start, TanStack Router
- **Mobile**: Capacitor 8 (Android shell, Status Bar, Splash Screen, Browser)
- **Styling**: Tailwind CSS v4, Lucide Icons, Custom Keyframe Animations
- **Tooling**: Vite 8, Nitro, Vitest, ESLint

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (v9 or higher)
- [Android Studio](https://developer.android.com/studio) (for Android app builds)

### 1. Clone the repository
```bash
git clone https://github.com/rajeetcodeN/thesliceworthingtonapp.git
cd thesliceworthingtonapp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Web App Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Run Android App
```bash
# Sync web assets to the native Android project
npm run cap:sync

# Open the project in Android Studio
npm run cap:open:android
```
In Android Studio, click the green **Run** button (`Shift + F10`) to launch the app on your connected phone or emulator.

---

## 🧪 Testing & Linting

```bash
# Run unit tests
npm test

# Run linter
npm run lint
```

---

