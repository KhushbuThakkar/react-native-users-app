import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  //  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Loader, FlatRow, Tick, Header } from '../Components';
import styles from '../Styles/Login.styles';
import { getUsers, getFilteredUsers } from '../redux/actions/userActions';
import { connect } from 'react-redux';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.users !== prevState.users) {
      return {
        users: nextProps.users,
      };
    }
  }

  onCheckFilter = selectedArray => {
    this.props.getFilteredUsers(selectedArray);
  };

  render() {
    const { isloading, users, filters } = this.props;
    return (
      <View>
        <Loader isloading={isloading} />
        <Header />
        <Tick onCheckFilter={this.onCheckFilter} filters={filters} />
        <View style={styles.flatlistContainer}>
          <FlatList
            data={users}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <FlatRow data={item} />}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users:
      (state.users.users &&
        state.users.users.data &&
        state.users.users.data.items) ||
      [],
    isloading: state.users.loading,
    filters: state.users.TypesFilter,
  };
};
export default connect(
  mapStateToProps,
  { getUsers, getFilteredUsers }
)(UsersContainer);
