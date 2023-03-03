import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import dark from './dark';
import light from './light';

const ChangeTheme = () => {
  // hàm này để lấy ra theme hiện tại của diện thaoij
  const scheme = useColorScheme();

  const theme = scheme === 'dark' ? dark : light;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundColor,
    },
    text: {
      fontWeight: 'bold',
    },
  });

  return (
    <View style={[styles.container]}>
      <Text
        style={[
          styles.text,
          {
            color: theme.primaryColor,
            fontFamily: theme.font,
            fontSize: theme.fontSize,
          },
        ]}>
        Hello World
      </Text>
    </View>
  );
};

export default ChangeTheme;
