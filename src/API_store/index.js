import {add_many_users_reducer} from "../store/customerReducer";

export const fetchManyUsers = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(response => response.json())
      .then(json => dispatch(add_many_users_reducer(json)))
  }
}