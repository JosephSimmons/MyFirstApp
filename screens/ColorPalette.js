import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;
  return (
    <View style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={[styles.boldtxt, styles.txtpadding]}>
          Here are some boxes of different colours
        </Text>
      </View>
      <FlatList
        style={styles.listPadding}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={
          <Text style={[styles.header, styles.boldtxt]}>{paletteName}</Text>
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
