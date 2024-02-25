import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderBlockColor: COLORS.lightGray,
    borderBottomWidth: moderateScale(1),
    elevation: 8,
    flexDirection: 'row',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    width: '100%',
  },
  leftPartContainer: {
    flex: 0.8
  },
  rightPartContainer: {
    flex: 0.8
  },
  titleText: {
    color: COLORS.lightBlack,
    flex: 1,
    fontSize: verticalScale(18),
    fontWeight: '500',
    textAlign: 'center',
  },
});
