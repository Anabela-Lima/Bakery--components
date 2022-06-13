// component: SubmitRecipeForm

const SubmitRecipeForm = () => {

    return (
        
        <div id= "form1">
            <br></br>
            <form>
                <div id="divBox-form">

                    <div id= "form-text">
                        <h3> Submit A new Recipe:</h3>

                        <br></br>
                     <label for= "name"> Recipe Name:</label>
                     <input id= "user-input-RecipeName" type= "text" placeholder=" Recipe Name"></input>
                        <br></br>
                        <br></br>

                     <label for= "ingredients"> Ingredients:</label>
                     <input id= "user-input-ingredients"  type= "text" placeholder="Ingredients"></input>

                        <br></br>
                        <br></br>

                     <label  id= "instructions-label"for= "instructions"> Instructions:</label>
                        <input id= "user-input-instructions" type= "text" width= "100px" placeholder="Instructions"></input>

                     
                        <input id="submitButton-form" type="submit" value= "Submit" ></input>
             
                        
                    </div>
                    

                </div>
                   
            </form>
           
        </div>

    )
}




// exporting the function - to make it avaialble elsewhere
// naming of function being exported should match the function name
export default SubmitRecipeForm;