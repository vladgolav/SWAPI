import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import * as COLORS from "src/constants/colors";

export default StyleSheet.create({
  accordionItemContainer: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: moderateScale(1),
    marginTop: moderateScale(10),
    paddingBottom: moderateScale(5),
  },
  accordionItemContainerNoBorder: {
    borderBottomWidth: 0,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  favoriteButton: {
    alignSelf: 'flex-end',
  },
  scrollView: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(15),
  },
});
