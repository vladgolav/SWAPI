import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import * as COLORS from "src/constants/colors";

export default StyleSheet.create({
  clearButton: {
    alignSelf: 'flex-end',
  },
  clearText: {
    color: COLORS.red,
    fontSize: moderateScale(15),
    fontWeight: '400',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  footerView: {
    height: moderateScale(30),
  },
  loadingMoreContainer: {
    alignSelf: 'center',
    bottom: 0,
    position: 'absolute',
  },
  statisticContainer: {
    marginBottom: moderateScale(5),
    marginTop: moderateScale(5),
  },
  statisticText: {
    color: COLORS.gray,
    fontSize: moderateScale(20),
    fontWeight: '600',
    marginLeft: moderateScale(20),
    textAlign: 'center',
  },
  statisticValue: {
    color: COLORS.lightBlack,
  },
});
