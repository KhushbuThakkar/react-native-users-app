import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '../../Themes';
import CheckBox from 'react-native-check-box';

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxArray: [],
    };
  }

  clickEvent(index) {
    const { checkBoxArray } = this.state;
    if (!checkBoxArray.includes(index)) {
      checkBoxArray.push(index);
    } else {
      checkBoxArray.splice(checkBoxArray.indexOf(index), 1);
    }
    this.setState({ selected: checkBoxArray }, () => {
      this.props.onCheckFilter(checkBoxArray);
    });
  }

  render() {
    const { filters } = this.props;
    const { checkBoxArray } = this.state;
    const isSelected = val => checkBoxArray && checkBoxArray.includes(val);
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} style={styles.CheckBoxContainer}>
          {filters &&
            filters.map((data, tickIndex) => {
              return (
                <CheckBox
                  style={[
                    styles.singleCheckBox,
                    isSelected(data) && styles.selectedCheck,
                  ]}
                  onClick={() => this.clickEvent(data)}
                  isChecked={isSelected(data)}
                  rightText={'Type ' + data}
                  key={tickIndex}
                />
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    margin: 8,
    alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 8,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
  },
  singleCheckBox: {
    flex: 1,
    padding: 5,
    borderColor: colors.grey,
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
  },
  selectedCheck: {
    backgroundColor: colors.grey,
  },
});

export default Tick;
