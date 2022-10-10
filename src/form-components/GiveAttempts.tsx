import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [answer, setAnswer] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(3);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="number"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(Number(event.target.value))
                    }
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={!attempts}
            >
                Use
            </Button>
            {attempts}
            <Button onClick={() => setAttempts(attempts + answer)}>Gain</Button>
        </div>
    );
}
