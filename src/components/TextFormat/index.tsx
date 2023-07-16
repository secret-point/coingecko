import {StyleProp, ViewStyle, Text} from 'react-native';
import {formatCurrency} from 'react-native-format-currency';

interface Props {
  value: number;
  unit: string;
  style: StyleProp<ViewStyle>;
}

export const TextFormat: React.FC<Props> = ({value, unit, style}) => {
  const [text, textWithoutSymbol, symbol] = formatCurrency({
    amount: Number(value?.toFixed(3) || 0),
    code: unit.toUpperCase(),
  });
  return <Text style={style}>{symbol ? text : textWithoutSymbol + unit}</Text>;
};
