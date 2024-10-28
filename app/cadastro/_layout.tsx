import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Container from '@/components/Container';

export default function CadastroPage() {

  const isFocused = useIsFocused()
  const navigation = useNavigation();

  return (
   
        <Container>
            <Image
             source={require('../../assets/images/logo_menor.png')}/>

             <Text>SOLICITE SEU CADASTRO</Text>
        </Container>

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
