import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } 
from 'react-native';
import { FontAwesome } 
from '@expo/vector-icons';

export default function RegisterScreen() {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
      />

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

      <TextInput
        style={styles.input}
        placeholder="Birthday"
      />

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={styles.genderOption}
          onPress={() => {
            setIsMale(true);
            setIsFemale(false);
          }}>
          <FontAwesome name={isMale ? 'dot-circle-o' : 'circle-o'} size={24} color="black" />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.genderOption}
          onPress={() => {
            setIsMale(false);
            setIsFemale(true);
          }}>
          <FontAwesome name={isFemale ? 'dot-circle-o' : 'circle-o'} size={24} color="black" />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
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
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderText: {
    marginLeft: 10,
    fontSize: 16,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6F61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  termsText: {
    marginBottom: 10,
    fontSize: 12,
    color: '#555',
  },
});
