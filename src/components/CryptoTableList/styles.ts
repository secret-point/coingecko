import {StyleSheet} from 'react-native';
import {colors} from '~Root/assets/styles/colors';

export default StyleSheet.create({
  table: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    textAlign: 'left',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  row: {
    flexDirection: 'row',
    textAlign: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: colors.light,
    paddingRight: 15,
  },
  cell: {
    padding: 5,
    textAlign: 'right',
  },
});
