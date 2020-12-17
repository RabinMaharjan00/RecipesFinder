import React, { useState } from "react";
import { Form, Button, Navbar, Nav } from "react-bootstrap";

const Search = ({ foodSearch, getRandomMeal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      foodSearch(searchTerm);
    }
    setSearchTerm("");
  };

  const randomMeal = (e) => {
    e.preventDefault();
    getRandomMeal();
  };

  return (
    <React.Fragment>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"> Recipes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Form
          inline
          className="form my-2 my-lg-0 pull-right"
          onSubmit={handleSubmit}
        >
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="info" type="submit" className="mr-sm-2">
            <i className="fas fa-search"></i>
          </Button>
          <Button
            variant="primary"
            value="Random meal"
            onClick={(e) => randomMeal(e)}
          >
            <i className="fas fa-random"></i>
          </Button>
        </Form>
      </Navbar>
    </React.Fragment>
  );
};

export default Search;
