import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
  },
  descriptionText: {
    color: COLORS.black,
    flex: 0.45,
    fontSize: moderateScale(19),
    fontWeight: '600',
    textAlign: 'right',
  },
  titleText: {
    color: COLORS.gray,
    flex: 0.45,
    fontSize: moderateScale(19),
    fontWeight: '500',
  },
});
