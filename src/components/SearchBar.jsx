import React from "react";
import Form from "react-bootstrap/Form";

const SearchBar = ({ input, setInput }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Buscar en la tabla...</Form.Label>
      <Form.Control
        value={input}
        onChange={(ev) => {
          setInput(ev.target.value);
        }}
        type="email"
        placeholder="Buscar por ID, nombre de comercio o CUIT"
      />
    </Form.Group>
  );
};

export default SearchBar;
