import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import brian from "./images/brianT.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Blair Felker).
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World! Graphic design is my passion!</p>
            <h1>Characters from family guy!!!!!</h1>
            <ul>
                <li>Peter Griffin</li>
                <li>Quagmire</li>
                <li>Cleveland Brown</li>
                <li>Joe Swanson</li>
            </ul>
            <img src={brian} alt="BRIAN LOOK OUT!" />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="red-rectangle">Column A</div>
                    </Col>
                    <Col>
                        <div className="red-rectangle">Column B</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

//Put a red-filled rectangle in each column using a div tag with width, height, and backgroundColor styles.
