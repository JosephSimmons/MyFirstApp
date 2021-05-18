import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColourBox from './components/ColourBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.boldtxt}>
          Here are some boxes of different colours
        </Text>
      </View>
      <FlatList
        style={{ padding: 20 }}
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColourBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={
          <Text style={[styles.header, styles.boldtxt]}>Solarized</Text>
        }
      />
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
