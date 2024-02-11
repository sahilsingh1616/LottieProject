import React, { useRef, useState } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const ConfettiCannonApp = () => {
  const [isCannonActive, setCannonActive] = useState(false);
  const confettiCannonRef = useRef(null);

  const handleCannonPress = () => {
    setCannonActive(true);
    // Additional logic or state management can be added here
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isCannonActive && <ConfettiCannon

        count={200}
        
        origin={{x: -10, y: 0}}
        autoStart={false}
        ref={confettiCannonRef}
       />}
      {/* <Button title="Launch Confetti" onPress={handleCannonPress} /> */}

      <TouchableOpacity onPress={()=>handleCannonPress()} style={{width:'70%',height:60,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:22,color:'black'}}>Submit</Text>

      </TouchableOpacity>
    </View>
  );
};

export default ConfettiCannonApp;
