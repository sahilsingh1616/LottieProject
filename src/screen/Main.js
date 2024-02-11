import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const Main = () => {
  const animationRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(1000); // Initial duration

  const onPressButton = () => {
    // Change the duration when the button is pressed
    setAnimationDuration(500); // Change this value to your desired duration
  };

  return (
    <View>
      <LottieView
        style={{
          width: '80%',
          height: 100,
        }}
        ref={animationRef}
        source={require('../../assets/Animation/newone.json')}
        autoPlay
        loop
        duration={animationDuration}
      />
      <TouchableOpacity onPress={onPressButton} style={{width:'80%',height:50,backgroundColor:'red'}}>
        {/* Your button component */}
      </TouchableOpacity>
    </View>
  );
};

export default Main;
