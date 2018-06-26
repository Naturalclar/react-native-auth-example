import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner,
} from './common';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

type State = {
  email: String,
  password: String,
  error: String,
  loading: Boolean,
};

class LoginForm extends Component<null, State> {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false,
    });
  }

  renderButton() {
    const { loading } = this.state;
    if (loading) {
      return <Spinner small />;
    }

    return (
      <Button
        onPress={() => { this.onButtonPress(); }}
      >
        Log in
      </Button>
    );
  }

  render() {
    const { errorTextStyle } = styles;
    const { email, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="john_doe@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={event => this.setState({ email: event })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={event => this.setState({ password: event })}
          />
        </CardSection>

        <Text
          style={errorTextStyle}
        >
          {error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
