
const defaultValue = {
  customer:[]
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVER_CUSTOMER'
const ADD_MANY_USERS = 'ADD_MANY_USERS'

export const customerReducer = (state = defaultValue, action) => {
  switch (action.type){
    case ADD_MANY_USERS:
      return {...state, customer: [...state.customer, ...action.payload]}
    case ADD_CUSTOMER:
      return {...state, customer:[...state.customer, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customer: state.customer.filter(i=> i.id !== action.payload )}
    default:
      return state
  }
}

export const add_customers_reducer = (payload) => ({type:ADD_CUSTOMER, payload})
export const sub_customers_reducer = (payload) => ({type:REMOVE_CUSTOMER, payload})
export const add_many_users_reducer = (payload) => ({type:ADD_MANY_USERS, payload})