import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  input: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 5,
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 5,
  },
  container: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
