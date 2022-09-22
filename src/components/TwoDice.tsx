import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftValue, leftDice] = useState<number>(3);
    const [rightValue, rightDice] = useState<number>(4);
    function snakeEyes(): boolean {
        return leftValue === 1 && rightValue === 1;
    }
    return (
        <div>
            <span data-testid="left-die">
                Left Dice {leftValue}
                <Button onClick={() => leftDice(d6())}>Roll Left</Button>
            </span>
            <span data-testid="right-die">
                Right Dice {rightValue}
                <Button onClick={() => rightDice(d6())}>Roll Right</Button>
            </span>
            {snakeEyes() && <div>You Lose</div>}
            {leftValue === rightValue && !snakeEyes() && <div>You Win</div>}
        </div>
    );
}
