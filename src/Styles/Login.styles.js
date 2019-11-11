//Style file for the Login container class

import { StyleSheet, Dimensions } from 'react-native';
import { colors, appFonts } from '../Themes';
import { normalizeImage } from '../Themes/styleConfig';
const win = Dimensions.get('window');
const ratio = win.height / 320; //541 is actual image width

export default StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    //alignItems:'center',
  },

  logoContainer: {
    width: normalizeImage(60),
    height: normalizeImage(60),
    borderRadius: 220 / 2,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: win.height / 16,
  },
  sampleText: {
    padding: 16,
    fontSize: 16,
    color: colors.colorRed,
    //fontWeight:'800',
    fontSize: 24,
    fontFamily: appFonts.InconsolataBold,
  },
  flatlistContainer: {
    backgroundColor: '#EBEDF1',
  },
});
