import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } 
from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/45a7220d9093042e6ec77c891e553ded',
        }}
        style={styles.circleImage}
      />

      <Text style={styles.heading}>GROW YOUR BUSINESS</Text>

      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

        <Text style={styles.footerText}>    HOW WE WORK?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30, 
  },
  button: {
    backgroundColor: '#FFD700', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20, 
  },
});

export default Flex;
