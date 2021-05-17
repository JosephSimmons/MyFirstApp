import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ColourBox from './components/ColourBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.boldtxt}>
          Here are some boxes of different colours
        </Text>
      </View>
      <ColourBox colourName="Cyan" hexCode="#2aa198" />
      <ColourBox colourName="Blue" hexCode="#268bd2" />
      <ColourBox colourName="Magenta" hexCode="#d33682" />
      <ColourBox colourName="Orange" hexCode="#cb4b16" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boldtxt: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  header: {
    marginVertical: 5,
  },
  safeAreaContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 60,
  },
});

export default App;
