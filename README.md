# React-Native Basic Authentication

A simple authentication example using firebase.
The app contains a simple Log-in screen and a Log-out screen.

When you enter your email and password in your Log-in screen,
if the account exists, it will display the Log-out screen.

If no account exist, it will create a new account on `firebase` and display the Log-out screen.

## Prerequisite
You will need to have `node` and `watchman` installed on your pc to use `react-native`

Below instructions are for Macs.

### Install `node`

```
brew install node
```

### Install `watchman`

```
brew install watchman
```

### Install `yarn` (optional)

```
brew install yarn
```

## Getting Started

In order to test this app, you will need to have your own [firebase](https://firebase.google.com/) project.

### Create a new firebase project

Go to [firebase](https://firebase.google.com/) and create a new firebase project.

### Clone the Repository 

```
git clone https://github.com/Naturalclar/react-native-auth-example.git
```

### Install dependency

```
npm install
```

or

```
yarn
```

### Create `.env` file

On the root directory of your project, create a `.env` file with your firebase project configuration.

```.env
API_KEY=YOUR_API_KEY
AUTH_DOMAIN=YOUR_AUTH_DOMAIN
DATABASE_URL=YOUR_DATABASE_URL
PROJECT_ID=YOUR_PROJECT_ID
STORAGE_BUCKET=YOUR_STORAGE_BUCKET
MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
```

### Run it on an emulator

```
yarn run-ios
```

or

```
yarn run-android
```

## Credits

This was built with the help of the following Udemy course
[The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course)