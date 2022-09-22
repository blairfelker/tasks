import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function startHelper(): void {
        setValue(value - 1);
        setProgress(!inProgress);
    }
    return (
        <span>
            <Button
                onClick={() => startHelper()}
                disabled={inProgress || value <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setProgress(!inProgress)}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button onClick={() => setValue(value + 1)} disabled={inProgress}>
                Mulligan
            </Button>
            Attempts: {value}
        </span>
    );
}
