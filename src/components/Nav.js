import { Navbar, Container, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Nav = ({ rating, handleRating, input, handleInput, handleIsOpen }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src="https://react-bootstrap.netlify.app/logo.svg"
              alt="reactbootstrap logo"
              width="30"
              height="30"
              style={{ paddingRight: "5px" }}
            />
            MOVIE APP
          </Navbar.Brand>
          <input
            placeholder="Search for a movie"
            value={input}
            onChange={handleInput}
          />
          <ReactStars
            count={5}
            value={rating}
            onChange={handleRating}
            size={32}
            activeColor="#ffd700"
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
          <Button onClick={handleIsOpen}>Add Movie</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
