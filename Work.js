import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const AnimatedWord = ({ word, delay }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Text
      style={{
        opacity: animatedValue,
        transform: [
          {
            translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 0],
            }),
          },
        ],
      }}
    >
      {word}{' '}
    </Animated.Text>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        This is an <AnimatedWord word="animated" delay={0} /> sentence with{' '}
        <AnimatedWord word="affecting" delay={200} /> single words.
      </Text>
    </View>
  );
};

export default App;
