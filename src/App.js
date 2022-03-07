import { useState } from "react";

import Nav from "./components/Nav";
import AddMovie from "./components/AddMovie";
import MovieContainer from "./components/MovieContainer";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);

  const [input, setInput] = useState("");

  const [rating, setRating] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    rating: 1,
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMovie = (e) => {
    if (e.target.name === "rating") {
      setNewMovie({ ...newMovie, [e.target.name]: +e.target.value });
    }
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      handleIsOpen();
    }
    alert("Movie rating should be between 1 and 5.");
  };

  return (
    <div className="App">
      <Nav
        rating={rating}
        handleRating={handleRating}
        input={input}
        handleInput={handleInput}
        handleIsOpen={handleIsOpen}
      />
      <br />
      <br />
      <AddMovie
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        newMovie={newMovie}
        handleNewMovie={handleNewMovie}
        handleAddMovie={handleAddMovie}
      />
      <MovieContainer movies={movies} rating={rating} input={input} />
    </div>
  );
}

export default App;
