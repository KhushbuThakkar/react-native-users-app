///here you can defined the all the normalised functions that will helpfull for platform and device specific role
import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { colors } from '../Themes';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function normalizeImage(size) {
  const scale = SCREEN_HEIGHT / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    //alert(PixelRatio.roundToNearestPixel(newSize))
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
