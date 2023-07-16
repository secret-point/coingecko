import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '~Root/config/theme';

import adjust from '~Root/utils/adjust';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexShrink1: {
    flexShrink: 1,
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  bgWhite: {
    backgroundColor: BASE_COLORS.whiteColor,
  },

  textWhite: {
    color: BASE_COLORS.whiteColor,
  },
  textCenter: {
    textAlign: 'center',
  },
  mb0: {
    marginBottom: adjust(0),
  },
  mb3: {
    marginBottom: adjust(3),
  },
  mb5: {
    marginBottom: adjust(5),
  },
  mb8: {
    marginBottom: adjust(8),
  },
  mb10: {
    marginBottom: adjust(10),
  },
  mb15: {
    marginBottom: adjust(15),
  },
  mb20: {
    marginBottom: adjust(20),
  },
  mb25: {
    marginBottom: adjust(25),
  },
  mb30: {
    marginBottom: adjust(30),
  },
  mb50: {
    marginBottom: adjust(50),
  },
  mb70: {
    marginBottom: adjust(70),
  },
  mt5: {
    marginTop: adjust(5),
  },
  mt3: {
    marginTop: adjust(3),
  },
  mt2: {
    marginTop: adjust(2),
  },
  mt10: {
    marginTop: adjust(10),
  },
  mt15: {
    marginTop: adjust(15),
  },
  mt30: {
    marginTop: adjust(30),
  },
  mr0: {
    marginRight: 0,
  },
  mr2: {
    marginRight: adjust(2),
  },
  mr5: {
    marginRight: adjust(5),
  },
  mr8: {
    marginRight: adjust(8),
  },
  mr10: {
    marginRight: adjust(10),
  },
  mr15: {
    marginRight: adjust(15),
  },
  mr20: {
    marginRight: adjust(20),
  },
  mr25: {
    marginRight: adjust(25),
  },
  mr30: {
    marginRight: adjust(30),
  },
  mr50: {
    marginRight: adjust(50),
  },
  ml5: {
    marginLeft: adjust(5),
  },
  ml10: {
    marginLeft: adjust(10),
  },
  ml15: {
    marginLeft: adjust(15),
  },
  mh5: {
    marginHorizontal: adjust(5),
  },
  mh10: {
    marginHorizontal: adjust(10),
  },
  mh15: {
    marginHorizontal: adjust(15),
  },
  mv5: {
    marginVertical: adjust(5),
  },
  pv0: {
    paddingVertical: 0,
  },
  pv3: {
    paddingVertical: adjust(3),
  },
  pv5: {
    paddingVertical: adjust(5),
  },
  pv8: {
    paddingVertical: adjust(8),
  },
  pv9: {
    paddingVertical: adjust(9),
  },
  pv10: {
    paddingVertical: adjust(10),
  },
  pv12: {
    paddingVertical: adjust(12),
  },
  pv15: {
    paddingVertical: adjust(15),
  },
  pv20: {
    paddingVertical: adjust(20),
  },
  pv25: {
    paddingVertical: adjust(25),
  },
  pv60: {
    paddingVertical: adjust(60),
  },
  ph0: {paddingHorizontal: 0},
  ph5: {
    paddingHorizontal: adjust(5),
  },
  ph8: {
    paddingHorizontal: adjust(8),
  },
  ph10: {
    paddingHorizontal: adjust(10),
  },
  ph11: {
    paddingHorizontal: adjust(11),
  },
  ph15: {
    paddingHorizontal: adjust(15),
  },
  ph20: {
    paddingHorizontal: adjust(20),
  },
  ph22: {
    paddingHorizontal: adjust(22),
  },
  ph25: {
    paddingHorizontal: adjust(25),
  },
  ph30: {
    paddingHorizontal: adjust(30),
  },
  p5: {
    padding: adjust(5),
  },
  p9: {
    padding: adjust(9),
  },
  p10: {
    padding: adjust(10),
  },
  p12: {
    padding: adjust(12),
  },
  p15: {
    padding: adjust(15),
  },
  p18: {
    padding: adjust(18),
  },
  p20: {
    padding: adjust(20),
  },
  pl5: {
    paddingLeft: adjust(5),
  },
  pr5: {
    paddingRight: adjust(5),
  },
  pr10: {
    paddingRight: adjust(10),
  },
  pr15: {
    paddingRight: adjust(15),
  },
  pr22: {
    paddingRight: adjust(22),
  },
  pt2: {
    paddingTop: adjust(2),
  },
  pt5: {
    paddingTop: adjust(5),
  },
  pt8: {
    paddingTop: adjust(8),
  },
  pt10: {
    paddingTop: adjust(10),
  },
  pt15: {
    paddingTop: adjust(15),
  },
  pt20: {
    paddingTop: adjust(20),
  },
  pt25: {
    paddingTop: adjust(25),
  },
  pt30: {
    paddingTop: adjust(30),
  },
  pt35: {
    paddingTop: adjust(35),
  },
  pt40: {
    paddingTop: adjust(40),
  },
  pt45: {
    paddingTop: adjust(45),
  },
  pt50: {
    paddingTop: adjust(50),
  },
  pt60: {
    paddingTop: adjust(60),
  },
  pb5: {
    paddingBottom: adjust(5),
  },
  pb10: {
    paddingBottom: adjust(10),
  },
  pb15: {
    paddingBottom: adjust(15),
  },
  pb20: {
    paddingBottom: adjust(20),
  },
  pb25: {
    paddingBottom: adjust(25),
  },
  pb30: {
    paddingBottom: adjust(30),
  },
  pb40: {
    paddingBottom: adjust(40),
  },
  pb60: {
    paddingBottom: adjust(60),
  },
  flex: {
    display: 'flex',
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  icon118x24: {
    width: adjust(118),
    height: adjust(24),
  },
  icon24x24: {
    width: adjust(24),
    height: adjust(24),
  },
  icon8x8: {
    width: adjust(8),
    height: adjust(8),
  },
  icon4x16: {
    width: adjust(4),
    height: adjust(16),
  },
  icon10x10: {
    width: adjust(10),
    height: adjust(10),
  },
  icon12x12: {
    width: adjust(12),
    height: adjust(12),
  },
  icon13x12: {
    width: adjust(13),
    height: adjust(22),
  },
  icon14x14: {
    width: adjust(14),
    height: adjust(14),
  },
  icon14x8: {
    width: adjust(14),
    height: adjust(8),
  },
  icon14x22: {
    width: adjust(14),
    height: adjust(22),
  },
  icon15x15: {
    width: adjust(15),
    height: adjust(15),
  },
  icon16x16: {
    width: adjust(16),
    height: adjust(16),
  },
  icon18x17: {
    width: adjust(18),
    height: adjust(17),
  },
  icon18x18: {
    width: adjust(18),
    height: adjust(18),
  },
  icon18x20: {
    width: adjust(18),
    height: adjust(20),
  },
  icon19x24: {
    width: adjust(19),
    height: adjust(24),
  },
  icon20x18: {
    width: adjust(20),
    height: adjust(18),
  },
  icon20x20: {
    width: adjust(20),
    height: adjust(20),
  },
  icon52x52: {
    width: adjust(52),
    height: adjust(52),
  },
  icon56x56: {
    width: adjust(56),
    height: adjust(56),
  },
  icon22x23: {
    width: adjust(22),
    height: adjust(23),
  },
  icon22x22: {
    width: adjust(22),
    height: adjust(22),
  },
  icon22x16: {
    width: adjust(22),
    height: adjust(16),
  },
  icon25x18: {
    width: adjust(25),
    height: adjust(18),
  },
  icon25x25: {
    width: adjust(25),
    height: adjust(25),
  },
  icon30x30: {
    width: 30,
    height: 30,
  },
  icon32x20: {
    width: 32,
    height: 20,
  },
  icon32x23: {
    width: adjust(32),
    height: adjust(23),
  },
  icon32x32: {
    width: 32,
    height: 32,
  },
  icon33x32: {
    width: 33,
    height: 32,
  },
  icon40x40: {
    width: adjust(40),
    height: adjust(40),
  },
  icon48x20: {
    width: adjust(48),
    height: adjust(20),
  },
  icon50x48: {
    width: adjust(50),
    height: adjust(48),
  },
  icon34x34: {
    width: adjust(34),
    height: adjust(34),
  },
  icon88x88: {
    width: adjust(88),
    height: adjust(88),
  },
  icon110x180: {
    width: adjust(110),
    height: adjust(180),
  },
  icon157x69: {
    width: adjust(157),
    height: adjust(69),
  },
  icon166x45: {
    width: adjust(166),
    height: adjust(45),
  },
  icon166x160: {
    width: adjust(166),
    height: adjust(160),
  },
  icon220x98: {
    width: adjust(220),
    height: adjust(98),
  },
  icon338x151: {
    width: adjust(338),
    height: adjust(151),
  },
  icon339x151: {
    width: adjust(339),
    height: adjust(151),
  },
  icon342x151: {
    width: adjust(342),
    height: adjust(151),
  },
  icon344x144: {
    width: adjust(344),
    height: adjust(144),
  },
  withBox: {
    width: 50,
  },
  heightBox: {
    height: 50,
  },
  widthFull: {
    width: '100%',
  },
  heightFull: {
    height: '100%',
  },
  width60P: {
    width: '60%',
  },
  hidden: {
    display: 'none',
  },
  inputStyle: {
    height: 50,
  },
  lineHeight9: {
    lineHeight: adjust(9),
  },
  lineHeight10: {
    lineHeight: adjust(10),
  },
  lineHeight12: {
    lineHeight: adjust(12),
  },
  lineHeight18: {
    lineHeight: adjust(18),
  },
  lineHeight20: {
    lineHeight: adjust(20),
  },
  lineHeight22: {
    lineHeight: adjust(22),
  },
  border1: {
    borderWidth: 1,
  },
  borderTransparent: {
    borderColor: 'transparent',
  },
  rounded4: {
    borderRadius: adjust(4),
  },
  rounded8: {
    borderRadius: adjust(8),
  },
  rounded: {
    borderRadius: adjust(12),
  },
  rounded64: {
    borderRadius: adjust(64),
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  font9: {
    fontSize: adjust(9),
  },
  font8: {
    fontSize: adjust(8),
  },
  font7: {
    fontSize: adjust(7),
  },
  gap5: {
    gap: 5,
  },
  gap10: {
    gap: 10,
  },
  gap15: {
    gap: 15,
  },
  gap20: {
    gap: 20,
  },
  rowGap3: {
    rowGap: 3,
  },
  columnGap3: {
    columnGap: 3,
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textBold: {
    fontWeight: '800',
  },
});
