// import React, { useEffect } from 'react';
// import { View, Text, Animated, StyleSheet } from 'react-native';

// const AnimatedText = () => {
//   const opacity = new Animated.Value(0);

//   useEffect(() => {
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 1000, // Animation duration in milliseconds
//       useNativeDriver: true, // Enable native driver for better performance
//     }).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Text style={[styles.text, { opacity }]}>
//        Let's create this effect in React Native for iOS and android
//       </Animated.Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });

// export default AnimatedText;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



import Layout from './src/screen/Layout'
import Main from './src/screen/Main'

const App = () => {
  return (
  //  <Layout/>
  <Main/>
  )
}

export default App

const styles = StyleSheet.create({})