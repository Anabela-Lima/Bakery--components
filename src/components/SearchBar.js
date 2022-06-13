// component: searchBar

const SearchBar = () => {

    return (
        <div id= "searchBar">

            <form>
                <div>
                <input id= "user-input" type= "text" placeholder="search..."></input>
                <input id="submitButton" type="submit" value= "search"></input>
                </div>
                   
            </form>
        

        </div>

    )
}




// exporting the function - to make it avaialble elsewhere
// naming of function being exported should match the function name
export default SearchBar;