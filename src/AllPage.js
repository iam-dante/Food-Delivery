import {Card} from "./Components"


var allList = [
    {
        name: "Magarita",
        price: 25,
        time: 345,
        caloriesGrs: 234,
        caloriesKal: 30090,

    },

    {
        name: "Burrito Chees",
        price: 30,
        time: 390,
        caloriesGrs: 634,
        caloriesKal: 34390,

    },

    {
        name: "Taco",
        price: 50,
        time: 380,
        caloriesGrs: 334,
        caloriesKal: 40930,

    },

    {
        name: "Taco",
        price: 50,
        time: 380,
        caloriesGrs: 334,
        caloriesKal: 40930,

    },
]

export function AllPage(){
    return(
      <>    

        {

            allList.map((vl) => {
                return (

                    <Card name={vl.name} price={vl.price} time={vl.time}  caloriesGrs={vl.caloriesGrs} caloriesKal={vl.caloriesKal}/>
                )

            })

        }
            
           
        </>
    )
}