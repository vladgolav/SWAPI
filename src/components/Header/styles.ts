import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBlockColor: COLORS.lightGray,
    borderBottomWidth: moderateScale(1),
    flexDirection: 'row',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    width: '100%',
  },
  leftPartContainer: {
    flex: 0.2
  },
  rightPartContainer: {
    flex: 0.2
  },
  titleText: {
    color: COLORS.lightBlack,
    flex: 1,
    fontSize: moderateScale(16),
    fontWeight: '500',
    textAlign: 'center',
  },
});
