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
    shadowOpacity: 0.09,
    shadowRadius: 20,
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
