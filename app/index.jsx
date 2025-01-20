import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


const app = () => {
  return (
    <View>
      <Text>Details Screen</Text>
      <link href="/details" style={styles.link}>Details</link>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  link: {
    color: 'blue',

  }



});
