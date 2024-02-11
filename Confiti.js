// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useRef } from 'react'
// import * as Animatable from 'react-native-animatable';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import LottieView from 'lottie-react-native';
// import ConfettiCannon from 'react-native-confetti-cannon';


// const AnimatedBtn=Animated.createAnimatedComponent(TouchableOpacity)

// const Confiti = () => {
//   const ref=useRef()

//     const animatedWidth=useSharedValue(200)
//     const animatedStyle=useAnimatedStyle(()=>{
//         return{
//             width:animatedWidth.value,
           
//     }
//     })
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>

//       <Animatable.Text animation="slideInUp" iterationCount={1}   direction="alternate" style={{fontSize:15,color:'black',fontWeight:'500'}}>Let's create this effect in React Native for iOS and android.</Animatable.Text>
//       <ConfettiCannon
//         count={200}
//         origin={{x: -10, y: 0}}
//                 autoStart={true}
//         ref={ref}
//       />
//       <AnimatedBtn style={[{width:200,height:60,backgroundColor:'#181d29',borderRadius:30,position:'absolute',bottom:'35%',justifyContent:'center',alignItems:'center'},animatedStyle]} onPress={()=>{
//         if(animatedWidth.value==200){
//             animatedWidth.value =withTiming(170,{duration:500})
            
//         }else{
//             animatedWidth.value =withTiming(200,{duration:500})

//         }
//       }}>

//       <Animatable.View animation={'slideInDown'}  style={{flexDirection:'row'}}>
//         <Image  source={require('./assets/image/down.png')} style={{width:25,height:25}}/>

//         <Animatable.Text style={{fontSize:22,color:'white'}}>Submit</Animatable.Text>


//       </Animatable.View>
//      {/* <LottieView style={{width:300,height:120}}  s            source={require('../../assets/Animation/sahil.json')}   
//  autoPlay loop duration={650}/> */}

//       </AnimatedBtn>

//     </View>
//   )
// }

// export default Confiti

// const styles = StyleSheet.create({})