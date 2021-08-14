import { PlusIcon, MinusIcon, ChevronLeftIcon, CurrencyDollarIcon} from "@heroicons/react/outline"
import {OrderCard} from '../Components'
import {Link} from 'react-router-dom'

export default function OrderScreen(){


    return(
        <div className="relative h-screen bg-gray-100 ">
            <div>
                <Link to="/">
                    <ChevronLeftIcon className=" absolute left-4 top-6 h-6 w-6 "/>
                </Link>
                <span className=" absolute right-4 top-6 h-10 w-10 bg-white rounded-full flex justify-center items-center filter drop-shadow-lg text-xl font-medium ">6</span>
            </div>

            <div className="h-4/6 overflow-y-auto  pt-16 pl-6">
                <h1 className="text-3xl ">My Order</h1>


                {/* Card in My Order
                <div className="h-24  flex flex-row border-b border-gray-200 "> */}

                    {/* Pizza Picture */}
                    {/* <div className="w-36 flex justify-center items-center ">
                        <div className="h-16 w-16 bg-green-400 rounded-full "></div>
                    </div>

                
                    <div className= "h-24  w-full flex items-center ">

                        <div className="w-48 flex flex-row items-center justify-around">

                            <h1>1 </h1>
                            X
                            <div>
                                <h1>Margherita</h1>
                                <h1>$ 24,700</h1>
                            </div>
                        </div>

                        <TrashIcon className=" absolute right-4 h-6 w-6 text-gray-300"/>
                    </div>
                </div> */}


                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                


            </div>





            {/* The Pay Part */}
            <div className="absolute inset-x-0 bottom-0 h-72 bg-white rounded-t-3xl py-4 mx-auto">
                <div className="">


                    <div className="space-y-2 px-4">
                        <div className="relative h-24 flex  items-center ">

                            <h1 className="text-3xl font-medium ">Total</h1>
                            <h1  className="absolute right-4 text-3xl font-medium">$ 24.90 </h1>
                        </div>


                        
                        <div className="relatiave flex flex-row items-center ">
                            <h1 className="text-lg font-medium ">Persons</h1>


                            <div className=" absolute right-4  h-12  w-28  rounded-xl flex flex-row  justify-evenly items-center border-gray-400 border-2">
                                <MinusIcon className="h-4 w-4"/>
                                <h1>1</h1>
                                <PlusIcon className="h-4 w-4"/>
                            </div>


                        </div>

                    </div>


                    {/* <div className="h-48 flex flex-row overflow-x-auto space-x-1  items-center px-4">

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
                    </div> */}


                    {/* Add To Cart Button */}
                    <div className="px-4 mt-12">
                        <div className="h-12 mt-2 bg-yellow-600 rounded-lg flex justify-center items-center text-xl font-medium">
                            <CurrencyDollarIcon className="h-6 w-6 mx-2"/>
                            Pay
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

