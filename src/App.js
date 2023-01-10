import './App.css';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [area, setArea] = useState(0)
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(0)

  const handleLengthChange = (event) => {
    setLength(event.target.value)
  }
  
  const handleWidthChange = (event) => {
    // Set the width here
  }

  const calculateArea = () => {
    // This function should utilize the length and width values in state and calculate the area of a 4 sided figure.
    // Your code goes here
  }

  return (
    <Container className="App">
      <h1>Area: {area}</h1>
      <Form>
        <Form.Group>
          <Form.Label>Length</Form.Label>
          <Form.Control type="number" onChange={handleLengthChange} value={length}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Width</Form.Label>
          <Form.Control type="number" onChange={handleWidthChange} value={width}></Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={calculateArea}>
          Calculate Area
        </Button>
      </Form>
    </Container>
  );
}

export default App;
