import React, { ReactNode } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

// Definindo os tipos para os props do componente
interface ContainerProps {
  children: ReactNode; // Permite qualquer elemento React
}

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const statusBarStyle = STYLES[1];

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#D9D9D9'} barStyle={statusBarStyle} />
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Container;
