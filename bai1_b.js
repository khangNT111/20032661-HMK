import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } 
from 'react-native';

const ForgetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/080a466e7ee609036e6211166a11948b',
        }}
        style={styles.mailIcon}
      />

      <Text style={styles.heading}>FORGET PASSWORD</Text>
      <Text style={styles.description}>
        Provide your account’s email for which you want to reset your password
      </Text>

      <View style={styles.inputContainer}>
        <Image
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c7487038eef818afeca5c21c1cac5bd8',
          }}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 20,
  },
  mailIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C0C0C0', // Light grey background
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    height: 50,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFD700', // Yellow button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ForgetPasswordScreen;
