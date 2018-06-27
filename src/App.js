/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Config from 'react-native-config';
import {
  Header,
  Card,
  CardSection,
  Button,
  Spinner,
} from './components/common';
import LoginForm from './components/LoginForm';

const config = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseURL: Config.DATABASE_URL,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
};

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return (
          <Card>
            <CardSection>
              <Button
                onPress={() => firebase.auth().signOut()}
              >
                Logout
              </Button>
            </CardSection>
          </Card>
        );
      default:
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
