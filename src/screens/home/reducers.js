import { REQUEST_BOOKS, RECEIVE_BOOKS } from './actionTypes'

const initalState = {
  isFetching: false,
  data: [],
  error: ''
}

export const books = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === 'success' ? action.payload : initalState.data,
        error: action.status === 'error' ? action.payload : initalState.error
      })
    default:
      return state;
  }
}