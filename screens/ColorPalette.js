import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
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

  return (
    <View style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={[styles.boldtxt, styles.txtpadding]}>
          Here are some boxes of different colours
        </Text>
      </View>
      <FlatList
        style={styles.listPadding}
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={
          <Text style={[styles.header, styles.boldtxt]}>Solarized</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boldtxt: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  txtpadding: {
    padding: 10,
  },
  listPadding: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  header: {
    marginVertical: 5,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
