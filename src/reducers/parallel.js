import * as actionTypes from '../actionTypes/parallel';

export default (prevState = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.GET_USERS_SUCCESS:
      return Object.assign({}, prevState, {isFetching: false}, {users: action.data});
    case actionTypes.GET_CITIES:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.GET_CITIES_SUCCESS:
      return Object.assign({}, prevState, {isFetching: false}, {comments: action.data});
    case actionTypes.ERROR:
      return Object.assign({}, prevState, {isFetching: false}, {error: action.error});
    default:
      return prevState;
  }
}