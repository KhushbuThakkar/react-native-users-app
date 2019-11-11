import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { colors } from '@themes';

const FlatRow = props => {
  const renderDollar = () => {
    return <Text> {'\u0024'}</Text>;
  };
  return (
    <TouchableOpacity
      style={[styles.headerView, { borderColor: colors[props.data.type] }]}
      key={props.index}
    >
      <View style={styles.detailsContainer}>
        <Text style={styles.myDetailsName}>{props.data.fullName}</Text>
        <Text style={styles.myDetailsEmail}>{props.data.email}</Text>
        <View style={styles.budgetsContainer}>
          <View style={styles.singleBudget}>
            <View style={[styles.budget, { color: colors[props.data.type] }]}>
              <Text style={styles.budgetAmount}>
                {renderDollar()}
                {props.data.wallet1}
              </Text>
            </View>
            <View>
              <Text style={styles.BudgetText}>budget</Text>
            </View>
          </View>
          <View style={styles.singleBudget}>
            <View style={[styles.budget, { color: colors[props.data.type] }]}>
              <Text style={styles.budgetAmount}>
                {renderDollar()}
                {props.data.wallet1}
              </Text>
            </View>
            <Text style={styles.BudgetText}>budget</Text>
          </View>
          <View style={styles.singleBudget}>
            <View style={[styles.budget, { color: colors[props.data.type] }]}>
              <Text style={styles.budgetAmount}>
                {renderDollar()}
                {props.data.wallet1}
              </Text>
            </View>
            <Text style={styles.BudgetText}>budget</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FlatRow;

const styles = StyleSheet.create({
  headerView: {
    borderRadius: 8,
    margin: 10,
    padding: 6,
    backgroundColor: '#FFF',
    borderLeftWidth: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    // elevation: 4,
  },
  detailsContainer: {
    flexDirection: 'column',
    height: 170,
  },
  budgetsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  singleBudget: {
    flexDirection: 'column',
    marginTop: 20,
  },
  budget: {
    height: 60,
    width: 60,
    marginTop: 0,
    borderRadius: 60 / 2,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },

  budgetAmount: {
    fontSize: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  myDetailsEmail: {
    fontSize: 16,
    marginTop: 5,
    color: colors.textColor,
  },
  myDetailsName: {
    fontWeight: 'bold',
    color: '#4B526B',
    fontSize: 18,
    marginTop: 5,
    color: colors.textColor,
  },
  BudgetText: {
    marginTop: 0,
    alignSelf: 'center',
    // fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
