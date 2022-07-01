import React from 'react';
import './question.css';



const modalQuestion = ({questions, id, variants}) => {

  return (
    <div id={id} className="quest">
  <div className="quest-dialog">
    <div className="quest-content">
      <div className="quest-header">
        <h3 className="quest-title">{questions}</h3>
        <a href="#target" title="Close" className="close">&#8594;</a>
      </div>
      <div className="quest-body">
        {
          variants.map(x => (
            <button key={x.id} className="click" type="button" name="authBatton">{x.answers}</button>
          ))
        }
      </div>
    </div>
  </div>
</div>
  );
};

export default modalQuestion;
