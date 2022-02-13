import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  input: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 5,
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
  },
  container: {
    paddingVertical: 12,
  },
});
