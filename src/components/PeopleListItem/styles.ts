import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: moderateScale(1),
    flexDirection: 'row',
    marginBottom: moderateScale(10),
    marginHorizontal: moderateScale(16),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(14),
  },
  descriptionText: {
    color: COLORS.gray,
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  nameText: {
    color: COLORS.lightBlack,
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginBottom: moderateScale(3),
  },
  textContainer: {
    flex: 1,
    marginLeft: moderateScale(8),
  },
});