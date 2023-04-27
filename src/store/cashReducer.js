const defaultValue = {
  cash:0,
}

export const ADD_CASH = "ADD_CASH"
export const SUB_CASH = "SUB_CASH"

export const cashReducer = (state = defaultValue, action) => {
  switch (action.type){
    case ADD_CASH :
      return {...state, cash: state.cash + action.payload}
    case SUB_CASH:
      return {...state, cash: state.cash - action.payload}

    default:
      return state
  }
}

export const add_cash_reducer = (payload) => ({type:ADD_CASH, payload})
export const sub_cash_reducer = (payload) => ({type:SUB_CASH, payload})
