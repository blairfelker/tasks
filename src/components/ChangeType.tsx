import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, changeQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeType() {
        if (questionType === "multiple_choice_question") {
            changeQuestionType("short_answer_question");
        } else {
            changeQuestionType("multiple_choice_question");
        }
    }

    return (
        <div>
            <span>
                {questionType === "short_answer_question" && (
                    <div>Short Answer</div>
                )}
                {questionType === "multiple_choice_question" && (
                    <div>Multiple Choice</div>
                )}
                <Button onClick={() => changeType()}>Change Type</Button>
            </span>
        </div>
    );
}
