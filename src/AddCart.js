import {Link} from "react-router-dom"
import { PlusIcon, MinusIcon, ChevronLeftIcon, HeartIcon } from "@heroicons/react/outline"
import { useContext, useState } from "react"
import { DataState } from "./App"

export default function AddCart(){


    var Toppings=  [
        {
            name: "Cheese",
            imageURL: require("./iconImage/cheese.jpg").default
        },
        {
            name: "Meat",
            imageURL: require("./iconImage/meat.jpeg").default
        },
        {
            name: "Bacon",
            imageURL: require("./iconImage/bacon.png").default
        }
    ]


    var {state, setState} = useContext(DataState)
    var [numState, numsetState] = useState(1)

    return(
        <div className="relative h-screen bg-light-grey">
            <Link to="/">
                <ChevronLeftIcon className=" absolute left-4 top-6 h-6 w-6 "/>
            </Link>
            <HeartIcon className=" absolute right-4 top-6 h-6 w-6 "/>



            {/* The image part */}

            <div className="h-96  flex justify-center items-center">
                
                <img src={state.imageURL}  className="h-60 w-60 bg-red-300 rounded-full " alt=""/>
                
            </div>






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
                                <MinusIcon className="h-4 w-4"  onClick={()=>{
                                    if (numState ===1 ){
                                        numsetState(1)
                                    }else{
                                        numsetState(numState - 1) }}
                                    }/>
                                
                                <h1>{numState}</h1>
                                <PlusIcon className="h-4 w-4" onClick={()=>{
                                    numsetState(numState + 1)
                                }}/>
                            </div>

                            <h1 className="absolute right-4 text-2xl font-medium ">$ {state.price}</h1>

                        </div>

                    </div>


                    <div className="h-48 flex flex-row overflow-x-auto space-x-3  items-center px-4">

                    {
                        Toppings.map((vl, ix)=>{

                        return(
                        <div key={ix}>
                        <div className=" relative h-36 w-28 bg-light-grey rounded-md filter drop-shadow-md flex justify-center ">
                            <img alt = "" src={vl.imageURL} className="absolute h-16 w-16 bottom-6" />
                            <h1 className=" absolute bottom-2 text-sm">{vl.name}</h1>
                        </div>
                        </div>
                        )
                        })
                    }
                    </div>


                    {/* Add To Cart Button */}
                    <div className="px-4">
                        <Link to="/">
                        <div className="h-12 mt-2 bg-orange rounded-lg flex justify-center items-center text-xl font-medium text-dark-blue"
                            onClick={()=>{
                                for(var i= 0; i < numState; i++){


                                    setState((pv)=>({
                                         ...pv,
                                        cartList:[...pv.cartList, {name: pv.name, caloriesGrs: pv.caloriesGrs,
                                            caloriesKal: pv.aloriesKal,
                                            id: pv.id,
                                            // name: pv.name,
                                            price: pv.price,
                                            time: pv.time,
                                            imageURL: pv.imageURL
                                        }]
                                    }))
                                }
                                console.log(state)
                            }}
                        >
                            Add To Cart
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

