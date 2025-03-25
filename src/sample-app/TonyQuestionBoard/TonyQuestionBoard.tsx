import React from 'react'

import { questions } from '../../mocks/data'

const groupBy = function(xs: any, key: any) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function TonyQuestionBoard() {
  const questionCategories = groupBy(questions, "category")
  // TODO: find question item from data submission with question id
  return (
    <div>
      <h1>TonyQuestionBoard</h1>

     <div className="flex">
      {Object.keys(questionCategories).map(key => {
        const item = questionCategories[key];
        console.log({key, item})
        return (
          <div>
            <div>{key}: 1 / {item.length}</div>
            {item.map((source: any) => (
              <div>
                {source.name}
              </div>
            ))}
          </div>
        )
      })}
     </div>

    </div>
  )
}

export default TonyQuestionBoard