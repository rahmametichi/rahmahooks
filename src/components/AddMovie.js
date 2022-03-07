import { Modal, Button } from "react-bootstrap";

const AddMovie = ({
  isOpen,
  handleIsOpen,
  newMovie,
  handleNewMovie,
  handleAddMovie,
}) => {
  return (
    <div>
      <Modal
        show={isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "48%",
            margin: "auto",
          }}
        >
          <h6>Movie Image</h6>
          <input
            name="img"
            value={newMovie.img}
            onChange={handleNewMovie}
            placeholder="Enter the movie cover here..."
          />
          <br />
          <h6>Movie Name</h6>
          <input
            name="name"
            value={newMovie.name}
            onChange={handleNewMovie}
            placeholder="Enter the movie name here..."
          />
          <br />
          <h6>Movie Rating</h6>
          <input
            name="rating"
            type="number"
            value={newMovie.rating}
            onChange={handleNewMovie}
            placeholder="Enter the movie rating here..."
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleIsOpen}>Close</Button>
          <Button onClick={handleAddMovie}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
