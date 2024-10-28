import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreenPage() {

  const isFocused = useIsFocused()
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      iniciar()
    }, 3000);
    return () => clearTimeout(timer);
  }, [isFocused]);

  async function iniciar(){

    let viewOnboarding = await AsyncStorage.getItem('v_onb')

    if (!viewOnboarding){
      navigation.reset({
        routes:[{name: 'cadastro'}]
      })
      }else{
        navigation.reset({
          routes:[{name: 'tabs'}]})
      }
  }

  return (
   
        <View style={styles.containerLogo}>
            <Animatable.Image
            animation="slideInUp"
            duration={3000}
            source={require('../../assets/images/logo.png')}
            style={{ width: '70%', justifyContent: 'center', alignItems: 'center'}}
            resizeMode='center'
            />
        </View>

  );
};

const styles = StyleSheet.create({
    containerLogo: {
        flex: 2,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        }
});
