import adjust, {adjustLineHeight} from '~Root/utils/adjust';

import {StyleSheet} from 'react-native';
import {BASE_COLORS, BASE_STYLES} from '~Root/config/theme';

export default StyleSheet.create({
  h1: {
    fontSize: adjust(BASE_STYLES.h1),
    lineHeight: adjustLineHeight(BASE_STYLES.h1),
  },
  h2: {
    fontSize: adjust(BASE_STYLES.h2),
    lineHeight: adjustLineHeight(BASE_STYLES.h2),
  },
  h3: {
    fontSize: adjust(BASE_STYLES.h3),
    lineHeight: adjustLineHeight(BASE_STYLES.h3),
  },
  h4: {
    fontSize: adjust(BASE_STYLES.h4),
    lineHeight: adjustLineHeight(BASE_STYLES.h4),
  },
  h5: {
    fontSize: adjust(BASE_STYLES.h5),
    lineHeight: adjustLineHeight(BASE_STYLES.h5),
  },
  h6: {
    fontSize: adjust(BASE_STYLES.h6),
    lineHeight: adjustLineHeight(BASE_STYLES.h6),
  },
  h7: {
    fontSize: adjust(BASE_STYLES.h7),
    lineHeight: adjustLineHeight(BASE_STYLES.h7),
  },
  p: {
    fontSize: adjust(BASE_STYLES.p),
    lineHeight: adjustLineHeight(BASE_STYLES.p),
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {fontWeight: 'bold'},
  extraBold: {fontWeight: '900'},
  textWhite: {
    color: BASE_COLORS.whiteColor,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
});
