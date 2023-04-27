import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {add_cash_reducer, sub_cash_reducer} from "./store/cashReducer";
import {add_customers_reducer, sub_customers_reducer} from "./store/customerReducer";
import {fetchManyUsers} from "./API_store";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const users = useSelector(state => state.customer.customer)

  const [inputNumberValue, setInputNumberValue] = useState(1)
  const [userValue, setUserValue] = useState('')
  const addValue = (inputNumberValue) => {
    dispatch(add_cash_reducer(inputNumberValue))
  }
  const subValue = (inputNumberValue) => {
    dispatch(sub_cash_reducer(inputNumberValue))
  }
  const addUser = (userValue) => {
    if(!userValue) return

    const user = {
      name:userValue,
      id: Date.now(),
    }
    dispatch(add_customers_reducer(user))

    setUserValue('')
  }

  const removeUser = (idUser) => {
    dispatch(sub_customers_reducer(idUser))
  }

  useEffect(()=>{
    dispatch(fetchManyUsers())
  },[dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    if(!userValue) return
    addUser(userValue)
  }
  return (
    <div className="App">
      <h1>{cash}</h1>
      <input type="number" value={inputNumberValue} onChange={e=>setInputNumberValue(+e.target.value)}/>
      <button onClick={()=>addValue(inputNumberValue)}>Add</button>
      <button onClick={()=>subValue(inputNumberValue)}>Sub</button>
      <hr/>

      <h2>Users</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={userValue} onChange={e=>setUserValue(e.target.value)}/>
        <button onClick={()=>addUser(userValue)}>Add</button>
        <button onClick={()=>dispatch(fetchManyUsers())}>ADD MANY USERS</button>
        <div>
          {users.length > 0 ?
            <div>
              {users.map(i=>
                <fieldset style={{borderRadius:'10px', border:'none',display:'flex',
                  justifyContent:'space-between'
                  ,margin:'5px', background:'green', color:'white'}}
                          key = {i.id}>
                  {i.name}
                  <button
                    onClick={()=>removeUser(i.id)}
                  >
                    &times;
                  </button>
                </fieldset>
              )}
            </div>:
            <div>
              no users at all!
            </div>
          }
        </div>
      </form>
    </div>
  );
}

export default App;
