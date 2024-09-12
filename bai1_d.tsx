
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } 
from 'react-native';
import { FontAwesome } 

from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <FontAwesome name="eye" size={24} color="black" style={styles.icon} />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>For got your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginText}>Or login with</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F7E4', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6F61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  termsText: {
    marginBottom: 10,
    fontSize: 12,
    color: '#555',
  },
  forgotPasswordText: {
    color: '#0066FF',
    marginBottom: 20,
  },
  orLoginText: {
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF', 
    borderRadius: 25,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
