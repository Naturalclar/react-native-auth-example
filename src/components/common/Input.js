import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, onChangeText, label, placeholder, keyboardType, secureTextEntry }) => {
  const {inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
};

Input.defaultProps = {
  keyboardType: 'default',
  secureTextEntry: false,
  placeholder: '',
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    flex: 1,
  }
}

export { Input };