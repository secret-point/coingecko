import React, {useMemo} from 'react';
import {Text, TextProps} from 'react-native';

import styles from './styles';
import {colors} from '~Root/assets/styles/colors';

export enum ColorVariant {
  CONTRAST = 'contrast',
  REV_CONTRAST = 'rev_contrast',
  PRIMARY = 'primary',
  LINK = 'link',
  HINT = 'hint',
  FRAME = 'frame',
  EXTRA1 = 'extra1',
  EXTRA2 = 'extra2',
  EXTRA3 = 'extra3',
  EXTRA4 = 'extra4',
  EXTRA5 = 'extra5',
  WHITE = 'white',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface TypographyProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  h7?: boolean;
  p?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  textWhite?: boolean;
  textChineseBlack?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
  textLeft?: boolean;
  title?: string | number | null;
  colorVariant?: string;
}

const Typography = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  p,
  bold,
  extraBold,
  textWhite,
  textCenter,
  textRight,
  textLeft,
  title,
  style,
  colorVariant,
  ...rest
}: TypographyProps) => {
  return (
    <Text
      style={[
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        h6 && styles.h6,
        h7 && styles.h7,
        p && styles.p,
        bold && styles.bold,
        textWhite && styles.textWhite,
        textCenter && styles.textCenter,
        textRight && styles.textRight,
        textLeft && styles.textLeft,
        {color: colors[colorVariant || 'black']},
        style,
      ]}
      {...rest}>
      {title}
    </Text>
  );
};

export default Typography;
