import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import SubmitRecipe from './components/SubmitRecipes';
import ChangeBackground from './components/ChangeBackground';
import DisplayRecipes from './components/DisplayRecipes';

function App() {
  return (
   <div>
  
    <br></br>
     <h1 id= "welcome"> Welcome to the Bakery! </h1>
     <Title/>
     <ChangeBackground/>
     <Navigation/>
     <SearchBar/>
     <br></br>
     <img id="pic1" src="https://butterwithasideofbread.com/wp-content/uploads/2018/05/cheesecake-11.jpg"  alt="CheeseCake"></img>
     <iframe  id= "youtube-video-1"  src="https://www.youtube.com/embed/sRGENvCtQoA?autoplay=1"></iframe>  
     <img id ="pic2" src="https://takestwoeggs.com/wp-content/uploads/2021/05/Strawberry-Jelly-Cheesecake-No-Bake-TakesTwoEggs-sq-feature.jpg"  alt="CheeseCake"></img>
     <SubmitRecipe/>
     <img id="logo" src="https://www.pngall.com/wp-content/uploads/7/Bakery-Logo-PNG.png"  alt="logo"></img>

     <DisplayRecipes/>


     <img id="pic4" src="https://scontent.fltn2-1.fna.fbcdn.net/v/t1.6435-9/193546729_7792897800750830_8427607991745510629_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=110&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=DuKlXeze7gAAX-7CPWm&_nc_ht=scontent.fltn2-1.fna&oh=00_AT88K7M6SZR9pJvlllh2UsjwqDoL7vl9Vr1Xp7J23rr3MA&oe=62CE3C90"  alt="logo"></img>




   
   </div>
  );
}

export default App;

