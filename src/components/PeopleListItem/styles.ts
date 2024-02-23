import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    borderBottomColor: COLORS.lightGray,
    marginHorizontal: moderateScale(16),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    width: '100%',
  },
});