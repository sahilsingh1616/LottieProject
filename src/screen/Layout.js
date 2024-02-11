import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, UIManager, LayoutAnimation, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import * as Animatable from 'react-native-animatable';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Layout = () => {
  const animationRef = useRef(null);
  const Sahil = useRef(null);


  const confettiCannonRef = useRef(null);
  const [state, setState] = useState(0);
  const [expanded, setExpanded] = useState(false);

  //   const animatedWidth = useSharedValue(200);

  //   const animatedStyle = useAnimatedStyle(() => {
  //     return {
  //       width: animatedWidth.value,
  //     };
  //   });5

  const handleSomeKindOfEvent = useCallback(() => {
    confettiCannonRef.current.start();
  }, []);

  const handleAnimations = () => {
    setState(1);
    console.log("state 1")
    // Play confetti animation after 3 seconds
    setTimeout(() => {
      console.log("state changes")
      handleSomeKindOfEvent();
      setState(2);
      console.log("121212")
    }, 500);

    // Collapse the button's width
    // animatedWidth.value = withTiming(170, { duration: 500 });
  };

  const handleExpand = () => {
    // Expand the button's width after the confetti animation is complete
    // animatedWidth.value = withTiming(200, { duration: 500 });
  };

  const handleSubmit = () => {
    // Trigger the collapse/expand animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, () => {
      if (expanded) {
        handleExpand();
      }
    });
    setExpanded(!expanded);
  };

  return (
    <View style={{ flex: 1 }}>
      <Animatable.Text animation="slideInUp" iterationCount={1} style={{ fontSize: 15, color: 'black', fontWeight: '500', alignSelf: 'center', marginTop: '100%' }}>Let's create this effect in React Native for iOS and android.</Animatable.Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[{
          width: expanded ? 170 : 200,
          height: 60,
          backgroundColor: '#181d29',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1000,
          bottom: '30%',
          borderRadius: 30
        },]}
        onPress={() => {
          handleAnimations();
          handleSubmit();
        }}
      >
        {state === 1 ? (
          <LottieView
            style={{
              width: '80%',
              height: 100,
            }}
            ref={animationRef}
            //duration={500}
            source={require('../../assets/Animation/newone.json')}
            autoPlay
            loop
          />
        ) : state === 0 ? (
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/image/down.png')} style={styles.icon} />
            <Animatable.Text animation={'slideInDown'} style={{ color: 'white' }}>Submit</Animatable.Text>
          </View>
        ) : (
          <View style={styles.lastView}>
            <LottieView
              style={{
                width: 60,
                height: 60,


              }}
              ref={Sahil}
              duration={1000}
              source={require('../../assets/Animation/tick.json')}
              autoPlay
              loop={false}
            />

            <Animatable.Text
              animation={'bounceInLeft'}
              delay={3000}
              duration={3000}
              // Call handleExpand when the success animation is complete
              style={styles.Txt}>
              Success

            </Animatable.Text>
          </View>
        )}
      </TouchableOpacity>

      {state >= 1 && (
        <ConfettiCannon
          onAnimationStart={() => setExpanded(false)}
          count={200}
          colors={['rgba(73,54,208,255)', 'rgba(125,142,217,255)']}
          origin={{ x: -20, y: 10 }}
          autoStart={false}
          ref={confettiCannonRef}
          fadeOut
        />
      )}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  icon: { width: 27, height: 17, resizeMode: 'contain' },
  lastView: { flexDirection: 'row', alignItems: 'center', marginLeft: 60, width: 200, height: 60 },
  Txt: { color: 'white', position: 'absolute', left: 50 }
});
