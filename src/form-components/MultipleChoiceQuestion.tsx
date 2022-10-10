import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    /* return (
        /*<div>
            <h3>Multiple Choice Question</h3>
            <Form.Group role={""}>
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="number"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
        </div>
    );*/
}
