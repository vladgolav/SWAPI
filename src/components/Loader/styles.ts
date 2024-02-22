import { StyleSheet } from "react-native";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.whiteWithOpacity,
  },
});