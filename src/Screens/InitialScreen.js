import { useContext } from 'react'
import {Tab} from '@headlessui/react'
import {Link} from "react-router-dom"
import { DataState } from '../App'
import { findTotal } from '../Components'

import { MenuAlt1Icon, ShoppingBagIcon } from '@heroicons/react/outline'
import { AllPage, PizzaPage, TacoPage, BurgerPage } from '../AllPage'

function InitialScreen(){



  var list =[
    {
      name:"All",
      imageURL: require("../iconImage/allfood.jpeg").default
    },
    {
      name:"Pizza",
      imageURL: require("../iconImage/pizza.png").default
    },
    {
      name:"Burger",
      imageURL: require("../iconImage/burgericon.jpeg").default
    },
    {
      name:"Taco",
      imageURL: require("../iconImage/taco.jpeg").default
    },

  ]

  const  {state} = useContext(DataState);

  // Making a list of all ID that where selected
  var listID = []
  for(var i = 0; i < state.cartList.length; i++ ){
      if(listID.length === 0){
          listID.push(state.cartList[i].id)
      }
      else if(listID.includes(state.cartList[i].id)){
          continue
      }
      else{
          listID.push(state.cartList[i].id)
      }
      
  }
  
  
  // Making a list of Id with how much is  appeared
  var count = 0
  const listIdNum =[]
  for(var z = 0; z < listID.length; z++){
  
      for(var j = 0; j < state.cartList.length; j++ ){
          if(listID[z] === state.cartList[j].id ){
              count++
          }  
          else{
              continue
          }        
      }
      listIdNum.push({id:listID[z], num:count})
      count = 0
  }
  
  
  
  //Making a new list
  var newList =[]
  for(var k= 0; k < listIdNum.length; k++){
      for(var l=0; l < state.cartList.length; l++){
          if(listIdNum[k].id === state.cartList[l].id){
              newList.push({...state.cartList[l], num: listIdNum[k].num})
              break;
          }
          else{
              continue
          }
      }
  }



  // Calculating the total amount used
  var total = findTotal(newList)


  return(

  <div className="flex flex-col h-screen bg-light-grey">

    <Tab.Group>
      <Tab.List>
        <div className="">

          {/* Head part that holds profile icon */}
          <div className="relative  flex item-center py-4 px-4">
             <MenuAlt1Icon className="h-6 w-6"/>
            <div className="absolute right-4 h-12 w-12 rounded-full bg-gray-900"></div>
          </div>

          {/* Food Delivery Part*/}
          <div className="h-24 px-4">
            <h1 className="text-4xl">Food Delivery</h1>
            <h1>Ward GateWay Apt .908</h1>
          </div>

          {/* The Food ScrollView  */}
          <div className="h-32  flex flex-row overflow-x-auto space-x-1 px-2">

            {
              list.map((vl, ix)=>{

                return(
                <div key={ix}>
                <Tab  className=" relative h-24 w-20 bg-gray-100 mx-2 rounded-md filter drop-shadow-lg flex justify-center">
                  {/* <div className=" absolute h-12 w-12 bg-green-500 bottom-6"></div> */}

                  <img src={vl.imageURL} className="absolute  h-12 w-12  bottom-6" alt=""/>
                  <h1 className=" absolute   bottom-2 text-sm  ">{vl.name}</h1>
                </Tab> </div>)
              })

            }

          </div>


        </div>
      </Tab.List>
        <div className="flex-grow bg-white rounded-t-2xl overflow-y-auto">

          <Tab.Panels>

            <Tab.Panel>
              <AllPage/>
            </Tab.Panel>

            <Tab.Panel>
              <PizzaPage/>
            </Tab.Panel>
            <Tab.Panel>
              <BurgerPage/>
            </Tab.Panel>
            <Tab.Panel>
              <TacoPage/>
            </Tab.Panel>
          </Tab.Panels>
        </div>
    </Tab.Group>

    
    {

      state.cartList.length ? 
    
      (<Link to="/myorder" className="relative flex justify-center">
        {/* Cart View */}
        <div className="absolute  bottom-2 h-14 w-52 bg-dark-blue rounded-full flex items-center flex-row">
          <div className=" flex flex-row ml-6 space-x-3"> 
          <ShoppingBagIcon className="h-6 w-6 text-white"/>
          <h1 className="text-white">{state.cartList.length} items</h1>
          </div>
          <div className=" absolute right-1 h-12 w-16 bg-orange rounded-full flex justify-center items-center text-white font-bold"> 
              {total}
          </div>
        </div>
      </Link>) : null


    }



  </div>
  
  )
}

export default InitialScreen;
