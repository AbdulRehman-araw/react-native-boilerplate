import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import {fontsFamily} from '../../assets/Fonts';
import {colors} from '../../styles/color';

const CustomText = ({
  children,
  fontWeight,
  style,
  numberOfLines,
  ellipsizeMode,
  opacity,
}) => {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        style={{
          ...style,
          opacity: opacity ? opacity : 1,
          fontFamily: fontWeight ? fontWeight : fontsFamily.regular,
          color: style?.color ? style?.color : colors.black,
        }}>
        {children}
      </Text>
    </View>
  );
};

export default CustomText;
