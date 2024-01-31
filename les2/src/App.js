import './App.css';
import Feedback from './Feedback';
import Movie from './Movie';
import NavBar from './NavBar';



const movies=[
  {
    name:"Recep Ivedik 4",
    genre:"Comedy",
    director :"Eynal Bakshiyev",
    imdb:"8.6",
    description:"Funny turkish comedy",
    img:"https://image.kanald.com.tr/i/kanald/100/0x0/5f1542b2933ccb2ff00df243.jpg"
  },
  {
    name:"Kurtlar vadisi",
    genre:"Mafia",
    director :"Elchin Guliev",
    imdb:"999",
    description:"Better than modern movies",
    img:"https://sfera.az/file/articles/2023/12/10/1702231472_kurtlar_vadisi_-1024x576.jpg"
  },
  {
    name:"Yali capkini",
    genre:"Drama",
    director :"Amin Atakishiyev",
    imdb:"2.1",
    description:"A movie to watch while eating",
    img:"https://www.mia.az/uploads/img/posts/2023/10/18/yali-capkini-nda-ortalik-karisacak-diziden_16440535_74jpg-1697617037.jpg"
  }
]

const cinema = {
  name: "Park Cinema",
  address: "Park Bulvar",
  rating: "9.3",
}

const feedbacks = [
  {
    username: "Elvin Jamalzade",
    content:"The seats are too close to the TV",
  },
  {
    username: "Shireli Nuriyev",
    content:"The seats are uncomfortable for sleeping, I can't get a good sleep",
  },
]
function App() {
  return (
    <div className="App">
      
      <NavBar cinemaInfo={cinema}></NavBar>
      <Movie movieInfo={movies[0]}></Movie>
      <Movie movieInfo={movies[1]}></Movie>
      <Movie movieInfo={movies[2]}></Movie>

      <h1 style={{
        backgroundColor:"gray",
        color:"white"
      }}>Feedbacks</h1>
      <Feedback feedback={feedbacks[0]}></Feedback>
      <Feedback feedback={feedbacks[1]}></Feedback>
    </div>
  );
}

export default App;
