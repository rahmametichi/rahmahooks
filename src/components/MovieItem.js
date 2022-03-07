import ReactStars from "react-rating-stars-component";

const MovieItem = ({ filtredMovies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {filtredMovies.map((movie) => {
        return (
          <div
            key={movie.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img
              src={movie.img}
              alt={movie.name}
              height="250px"
              width="180px"
            />
            <h4 style={{ marginTop: "10px" }}>{movie.name}</h4>
            <ReactStars
              value={movie.rating}
              size={32}
              edit={false}
              activeColor="#ffd700"
            />
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
};

export default MovieItem;
