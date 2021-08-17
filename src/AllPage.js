import {Card} from "./Components"


var allList = [
    {
        id:0,
        name: "Magarita",
        price: 25,
        imageURL: require("./images/magarita.jpeg").default,
        time: 345,
        caloriesGrs: 234,
        caloriesKal: 30090,

    },

    {
        id:1,
        name: "Burrito Chees",
        imageURL: require("./images/burrito.jpeg").default,
        price: 30,
        time: 390,
        caloriesGrs: 634,
        caloriesKal: 34390,

    },

    {
        id:2,
        name: "Taco",
        imageURL: require("./images/taco.jpeg").default,
        price: 50,
        time: 380,
        caloriesGrs: 334,
        caloriesKal: 40930,

    },

    {
        id:3,
        name: "Banana Cheese",
        imageURL: require("./images/bananaCheese.jpeg").default,
        price: 11,
        time: 380,
        caloriesGrs: 334,
        caloriesKal: 40930,

    },

]

export function AllPage(){
    return(
      <>    

        {

            allList.map((vl, ix) => {
                return (

                    <Card key={ix}  name={vl.name} price={vl.price} time={vl.time}  caloriesGrs={vl.caloriesGrs} caloriesKal={vl.caloriesKal} id={vl.id} imageURL={vl.imageURL}/>
                )

            })

        }
            
           
    </>
    )
}