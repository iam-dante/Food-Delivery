import { useContext } from 'react'
import {Tab} from '@headlessui/react'
import {Link} from "react-router-dom"
import { DataState } from '../App'

import { MenuAlt1Icon, ShoppingBagIcon } from '@heroicons/react/outline'
import { AllPage } from '../AllPage'

function InitialScreen(){


  var list = ["All", "Pizza", "Burger", "Taco", "Burrito"]
  const  {state} = useContext(DataState);

  return(

  <div className="flex flex-col h-screen bg-gray-300">

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
              list.map((vl)=>{

                return(
                <div>
                <Tab  className=" relative h-24 w-20 bg-green-400 mx-2 rounded-md filter drop-shadow-lg">
                  <h1 className=" absolute  inset-x-0 bottom-2 text-sm">{vl}</h1>
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

            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>


          </Tab.Panels>
        </div>
    </Tab.Group>

    
    {

      state.cartList.length ? 
    
      (<Link to="/myorder">
        {/* Cart View */}
        <div className="absolute inset-x-1/4 bottom-2 h-14 w-52 bg-blue-900 rounded-full flex items-center flex-row">
          <div className=" flex flex-row ml-6 space-x-6"> 
          <ShoppingBagIcon className="h-6 w-6 text-white"/>
          <h1 className="text-white">{state.cartList.length} items</h1>
          </div>
          <div className=" absolute right-1 h-12 w-16 bg-yellow-500 rounded-full flex justify-center items-center text-white font-bold"> 
              $24
          </div>
        </div>
      </Link>) : null


    }



  </div>
  
  )
}

export default InitialScreen;
