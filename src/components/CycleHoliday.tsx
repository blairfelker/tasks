import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Christmas- Dec 25, Tree
//Leif Erikson Day- Oct 9, Axe
//Opposite Day- Jan 25, Flip Emoji
//Saint Patrick's Day- Mar 17, Clover
//Talk Like a Pirate Day- Sep 18, Pirate Flag

//Jan 25, Opposite Day, Flip Emoji
//Mar 17, Saint Patrick's Day- CLover
//Sep 18, Talk Like a Pirate Day, Pirate Flag
//Oct 9, Leif Erikson Day, Axe
//Dec 25, Christmas, Tree

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas 🌲");
    function nextAlphabetical() {
        if (holiday === "Christmas 🌲") setHoliday("Leif Erikson Day 🪓");
        else if (holiday === "Leif Erikson Day 🪓")
            setHoliday("Opposite Day 🔄");
        else if (holiday === "Opposite Day 🔄")
            setHoliday("Saint Patrick's Day 🍀");
        else if (holiday === "Saint Patrick's Day 🍀")
            setHoliday("Talk Like a Pirate Day 🏴‍☠️");
        else setHoliday("Christmas 🌲");
    }
    function nextByDate() {
        if (holiday === "Opposite Day 🔄") setHoliday("Saint Patrick's Day 🍀");
        else if (holiday === "Saint Patrick's Day 🍀")
            setHoliday("Talk Like a Pirate Day 🏴‍☠️");
        else if (holiday === "Talk Like a Pirate Day 🏴‍☠️")
            setHoliday("Leif Erikson Day 🪓");
        else if (holiday === "Leif Erikson Day 🪓") setHoliday("Christmas 🌲");
        else setHoliday("Opposite Day 🔄");
    }
    return (
        <div>
            <span>
                Holiday: {holiday}
                <Button onClick={() => nextAlphabetical()}>
                    Next by Alphabetical
                </Button>{" "}
                <Button onClick={() => nextByDate()}>Next by Year</Button>
            </span>
        </div>
    );
}
