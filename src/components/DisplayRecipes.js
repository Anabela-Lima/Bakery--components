// component: DisplayRecipes

const DisplayRecipes= () => {
    
   const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]

    // Map the cake objects below and for each cake display its name followed by a list of the ingredients. 
    // At the bottom of the component show the average cake rating.

   
    const cakesList = cakes.map(cake => {
        

        return<div id="cakesText" > <p><b>Cake Name:</b> {cake.cakeName} </p>  <p id= "rating"><b>Rating:</b> {cake.rating}</p> </div>


 
    })

    return(
        <div id="cakesList" >
        {cakesList}
        </div>

    )
       
   


}
// exporting the function - to make it avaialble elsewhere
// naming of function being exported should match the function name
export default DisplayRecipes;

