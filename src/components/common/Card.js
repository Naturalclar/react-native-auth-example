// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

type Props = {
  children: React.Node,
}

const Card = ({ children }:Props) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);


export default Card;
