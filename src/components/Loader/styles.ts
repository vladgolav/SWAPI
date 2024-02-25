import { StyleSheet } from "react-native";

import * as COLORS from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: COLORS.whiteWithOpacity,
    justifyContent: 'center',
  },
});