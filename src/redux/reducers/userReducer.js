import {
  GET_USERS_SUCCESS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_FILTERED_USERS,
} from '../actions/Types';

const initialState = {
  users: { data: [] },
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      const groupBy = (items, key) => {
        let uniqueTypes = [];
        items.map(item => {
          !uniqueTypes.includes(item[key]) && uniqueTypes.push(item[key]);
        });
        return uniqueTypes;
      };
      const TypesFilter = groupBy(action.payload.data.items, 'type');
      return {
        ...state,
        loading: false,
        users: { data: action.payload.data },
        allUsers: { data: action.payload.data },
        TypesFilter: TypesFilter ? TypesFilter.sort() : [],
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        users: { errors: true },
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILTERED_USERS:
      const selectedArray = action.payload.selectedArray;
      let usersItems = [];
      if (selectedArray.length <= 0) {
        usersItems = state.allUsers.data.items;
      } else {
        usersItems = state.allUsers.data.items.filter(user => {
          return selectedArray.includes(user.type);
        });
      }
      return {
        ...state,
        users: { data: { items: usersItems } },
      };

    default:
      return state;
  }
}
