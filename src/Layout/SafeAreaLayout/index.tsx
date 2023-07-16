import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';

interface Props {
  style: StyleProp<ViewStyle>;
}

export const SafeAreaLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
}) => {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};
