import {useState, createContext} from 'react';
import { Switch, Route } from 'react-router-dom'

import InitialScreen from './Screens/InitialScreen'
import AddCart from './AddCart'
import OrderScreen from './Screens/OrderScreen'

export const DataState = createContext()

function App(){

  const [state, setState] = useState({
    name:"",
    price:"",
    caloriesGrs: "",
    caloriesKal: "",
    imageURL:"",
    // cartNumber: 0,
    cartList: []
  })

  // const cartList =[]



return(

  
  <Switch>

    <DataState.Provider value={{state, setState}}>
        <Route path="/" exact>
          <InitialScreen/>
        </Route>

        <Route path="/cart">
          <AddCart/>
        </Route>

        <Route path="/myorder">
          <OrderScreen/>
        </Route>
    </DataState.Provider>

  </Switch>
  
  )

}

export default App;
