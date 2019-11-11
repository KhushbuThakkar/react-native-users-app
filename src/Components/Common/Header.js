import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@themes';
const Header = () => (
  <View style={styles.headerView}>
    <View style={styles.titleContainer}>
      <Text style={styles.titletext}>Users</Text>
    </View>
  </View>
);
export default Header;

const styles = StyleSheet.create({
  headerView: {
    height: 60,
    backgroundColor: colors['primary'],
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 2,
    marginLeft: 10,
  },
  titletext: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.secondary,
  },
});
