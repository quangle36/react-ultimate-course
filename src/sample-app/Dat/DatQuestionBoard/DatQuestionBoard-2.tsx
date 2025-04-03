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
  // Nhóm câu hỏi theo danh mục
  const groupByCaterory: ICategory = questions.reduce((acc, question) => {
    (acc[question.category] ||= []).push(question);
    return acc;
  }, {} as ICategory);

  // Tạo mảng ID câu hỏi đã nộp
  const correctItemIds = submit
    .filter(({ status }) => status === SubmitStatus.CORRECT)
    .map(({ questionId }) => questionId);

  const renderStatus = (status: SubmitStatus) => `question__status question__status--${status.toLowerCase()}`;

  return (
    <div>
      <h1>Dat Question Board</h1>
      <div className="question_board">
        {Object.entries(groupByCaterory).map(([category, items]) => {
          const correctCount = items.filter(({ id }) => correctItemIds.includes(id)).length;

          return (
            <div className="column" key={category}>
              <h2 style={{ textAlign: "center", color: "red", fontWeight: "800" }}>
                {category} {correctCount} / {items.length}
              </h2>
              {items.map(({ id, name }) => {
                const status = submit.find(({ questionId }) => questionId === id)?.status || SubmitStatus.INCORRECT;
                return (
                  <div className="boards" key={id}>
                    <div className="question">
                      <div className={renderStatus(status)}></div>
                      <div className="question__title">{name}</div>
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
