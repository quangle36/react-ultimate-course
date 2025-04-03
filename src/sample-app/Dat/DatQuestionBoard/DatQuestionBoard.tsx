import React from "react";
import "./DatQuestionBoard.css";
import { questions, submit } from "./data";

interface IQuestion {
  id: string;
  name: string;
  category: string;
}

interface ICategory {
  [category: string]: IQuestion[];
}

enum SubmitStatus {
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT",
  PARTIALLY_CORRECT = "PARTIALLY_CORRECT",
}

const DatQuestionBoard = () => {
  // Group by allow caterory Question
  const groupByCaterory: ICategory = questions.reduce((acc: ICategory, question: IQuestion) => {
    (acc[question.category] ||= []).push(question);
    return acc;
  }, {} as ICategory);

  const renderStatus = (status: SubmitStatus) => {
    if (status === SubmitStatus.INCORRECT) {
      return "question__status question__status--incorrect";
    }
    if (status === SubmitStatus.CORRECT) {
      return "question__status question__status--correct";
    }
    return "question__status question__status--partially_correct";
  };

  return (
    <div>
      <h1>Dat Question Board</h1>

      <div className="question_board">
        {Object.keys(groupByCaterory).map((key) => {
          const item = groupByCaterory[key];
          const itemSubmit = submit
            .filter((submission) => submission.status === SubmitStatus.CORRECT)
            .map((submission) => submission.questionId);

          const correctQuestion = groupByCaterory[key].filter((question) => {
            return itemSubmit.includes(question.id);
          }).length;

          return (
            <div className="column">
              <h2 className="sub_title">
                {key} {correctQuestion} / {item.length}
              </h2>

              {groupByCaterory[key].map((question) => {
                const status = submit.find((submission) => submission.questionId === question.id)
                  ?.status as SubmitStatus;
                return (
                  <div className="boards">
                    <div key={question.id} className="question">
                      <div className={`${renderStatus(status)}`}></div>
                      <div className="question__title">{question.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatQuestionBoard;
