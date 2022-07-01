import React from 'react';
import './questions.css';



const ModalQuestion = ({questions, id}) => {

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

        }
      </div>
    </div>
  </div>
</div>
  );
};

export default ModalQuestion;
