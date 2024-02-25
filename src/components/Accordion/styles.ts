import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  accordionButton: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightBlack,
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  container: {
    marginBottom: moderateScale(15),
  },
  titleText: {
    color: COLORS.lightBlack,
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
});
