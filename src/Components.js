import {Link,} from "react-router-dom"
import { useContext } from "react";
import {DataState} from './App'
import { PlusIcon, ClockIcon, TrashIcon } from "@heroicons/react/outline"




export function Card(props){

    const  {  setState,} = useContext(DataState);


    return(
        <div className="h-36  flex flex-row border-b-2 border-gray-200 "> 
            
            <div className=" w-36 h-36 flex justify-center items-center">
                <div className="bg-yellow-200 w-24 h-24 rounded-full "></div>
            </div>
            

            <div className=" flex flex-grow flex-col h-36 justify-center">

                <div className="space-y-1 relative">

                    <Link to="/cart" onClick={ () =>{
                        setState((pv)=>({
                            name: props.name,
                            price: props.price,
                            caloriesGrs: props.caloriesGrs,
                            caloriesKal:props.caloriesKal
                        }))
                        // console.log(state)
                    }
                        
                    }>







                        <h1 className="text-xl truncate w-36">{props.name}</h1>    
                        <h1 className=" absolute right-6 top-0 text-xl"> $ {props.price}</h1>

                        <div className="flex flex-row space-x-2">
                            <h1 className="text-gray-400">{props.caloriesGrs} grs</h1>
                            <h1 className="text-gray-400">{props.caloriesKal} Kal</h1>
                        </div>

                        <div className="bg-gray-200 w-max px-2 rounded-full flex flex-row justify-center text-sm text-gray-700 mt-3"> 
                            <ClockIcon className="h-5"/>
                            ~ {props.time} ms
                        </div>
                    </Link>

                    <div className="absolute right-6 bottom-2  w-10 h-10 flex justify-center items-center rounded-xl border-2 border-gray-100">

                    <PlusIcon className="h-6 w-6" onClick={()=>{
                        setState((pv)=>({
                            ...pv,
                            // cartNumber: pv.cartNumber + 1,
                            cartList: [{...props}, ...pv.cartList]
                            
                        }))
                    
                        // cartList.push(props)
                        // console.log(cartList)
                        // console.log(state.cartList)

                    }
                    }/>
                    </div>

                </div>
            </div>

        </div>
    )
}








export function OrderCard(){
    return(
        <>
        {/* Card in My Order */}
        <div className="h-24  flex flex-row border-b border-gray-300 ">

            {/* Pizza Picture */}
            <div className="w-36 flex justify-center items-center ">
                <div className="h-16 w-16 bg-green-400 rounded-full "></div>
            </div>

    
            <div className= "relative h-24  w-full flex items-center ">

                <div className="w-48 flex flex-row items-center justify-around">

                    <h1>1 </h1>
                    X
                    <div>
                        <h1>Margherita</h1>
                        <h1>$ 24,700</h1>
                    </div>
                <TrashIcon className=" absolute right-4 h-6 w-6 text-gray-400"/>
                </div>

            </div>
         </div>
    </>

    )
}