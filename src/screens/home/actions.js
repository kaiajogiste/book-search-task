import axios from 'axios'
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS
} from './actionTypes'

export const requestBooks = (query) => ({
  type: REQUEST_BOOKS,
  query
})

export const receiveBooks = ({status, payload }) => ({
  type: RECEIVE_BOOKS,
  status,
  payload
})

export const getBooks = (query) => {
  return function (dispatch) {
  	dispatch(requestBooks(query));
  	const url = `https://reststop.randomhouse.com/resources/works?search=${query}`
  	return axios.get(url)
    .then(response => {
      dispatch(receiveBooks({
        status: 'success',
        payload: response.data
        
      }))
      console.log(response.data);
    })
    .catch(error => {
      dispatch(receiveBooks({
        status: 'error',
        payload: error
      }))
    })
  };
  
}