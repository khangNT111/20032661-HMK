import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } 
from 'react-native';

const OTPVerificationScreen = () => {
  return (
    <View style={styles.container}>
   
      {/* Heading */}
      <Text style={styles.heading}>CODE</Text>

      {/* Subheading */}
      <Text style={styles.subheading}>VERIFICATION</Text>

      {/* Description */}
      <Text style={styles.description}>
        Enter onetime password sent on +849092605798
      </Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {/* Six TextInput boxes for the OTP */}
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFD700',
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

export default OTPVerificationScreen;
