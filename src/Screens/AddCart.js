import {Link} from "react-router-dom"
import { PlusIcon, MinusIcon, ChevronLeftIcon, HeartIcon } from "@heroicons/react/outline"
import { useContext } from "react"
import { DataState } from "../App"

export default function AddCart(){

    var Toppings=  ["Cheese", "Meat", "Bacon", "Pili"]

    var {state} = useContext(DataState)

    return(
        <div className="relative h-screen bg-gray-300 ">
            <Link to="/">
                <ChevronLeftIcon className=" absolute left-4 top-6 h-6 w-6 "/>
            </Link>
            <HeartIcon className=" absolute right-4 top-6 h-6 w-6 "/>






            {/* The Menu Part */}
            <div className=" absolute inset-x-0 bottom-0 h-2/4 bg-white rounded-t-3xl py-4 mx-auto">
                <div className="">


                    <div className="space-y-2 px-4">
                        <h1 className="text-3xl font-medium ">{state.name}</h1>
                        <div className="flex flex-row space-x-3 text-gray-400 font-medium ">
                            <h1>{state.caloriesGrs} gr</h1>
                            {/* <span className="bg-gray-700 h-1 w-1"> </span> */}
                            <h1>{state.caloriesKal}kkal</h1>
                        </div>
                        
                        <div className="relatiave flex flex-row items-center ">
                            <div className=" h-12  w-28  rounded-xl flex flex-row  justify-evenly items-center border-gray-400 border-2">
                                <MinusIcon className="h-4 w-4"/>
                                <h1>1</h1>
                                <PlusIcon className="h-4 w-4"/>
                            </div>

                            <h1 className="absolute right-4 text-2xl font-medium ">$ {state.price}</h1>

                        </div>

                    </div>


                    <div className="h-48 flex flex-row overflow-x-auto space-x-1  items-center px-4">

                    {
                        Toppings.map((vl)=>{

                        return(
                        <div>
                        <div className=" relative h-36 w-28 bg-green-400 rounded-md filter drop-shadow-lg flex justify-center ">
                            <h1 className=" absolute bottom-2 text-sm">{vl}</h1>
                        </div>
                        </div>
                        )
                        })
                    }
                    </div>


                    {/* Add To Cart Button */}
                    <div className="px-4">
                        <div className="h-12 mt-2 bg-yellow-600 rounded-lg flex justify-center items-center text-xl font-medium">
                            Add To Cart
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

