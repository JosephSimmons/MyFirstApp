import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColourBox = ({ colourName, hexCode }) => {
  const boxColour = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.container, boxColour]}>
      <Text style={styles.whiteboldtxt}>
        {colourName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  whiteboldtxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColourBox;
