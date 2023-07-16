import React from 'react';
import Typography from '../Typography';
import {View} from 'react-native';
import {GlobalStyles} from '~Root/config';
import styles from './styles';
import {formatCurrency} from 'react-native-format-currency';

interface Props {
  label: string;
  value: number;
  currency: string;
}

export const TextLabel: React.FC<Props> = ({label, value, currency}) => {
  const [text, textWithoutSymbol, symbol] =
    formatCurrency({
      amount: value,
      code: currency.toUpperCase(),
    }) || [];

  return (
    <View style={[GlobalStyles.flexCol]}>
      <Typography
        h6
        style={styles.labelStyle}
        colorVariant="gray"
        title={label}
      />
      <Typography
        h5
        style={styles.textStyle}
        colorVariant="black"
        title={symbol ? text : `${text} ${currency}`}
      />
    </View>
  );
};
