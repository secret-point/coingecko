# Cryptocurrency Tracker

## Prerequisites

- [Node.js 18.15.0]
- [Watchman]
- [Xcode 12.4]
- [Cocoapods 1.11.3]
- [JDK > 11]
- [Android Studio and Android SDK]

## Get Started

### :arrow_up: How to Setup

Install the Application with `yarn --legacy-peer-deps` or `npm i --legacy-peer-deps`

### How to Run App

1. cd to the project(coingecko)
2. Run Build for either OS

- for iOS
  - run `npx pod-install`
  - run `npx react-native run-ios`
- for Android
  - Run Emulator
  - run `npx react-native run-android`
- for testing
  - run `npm run test`

# Delete ALL gradle cache:

rm -rf $HOME/.gradle

# Delete all yarn cache:

rm -rf node_modules

# Delete all pod cache:

rm -rf ios/Pods
