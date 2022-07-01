
import React, { useCallback, useEffect, useState } from 'react';
import './questions.css';




const ModalQuestion = ({description, answer, id, point}) => {

  const [vision, setVision] = useState(false)
  
  const visionHell = useCallback((event) => {
    setVision((ev)=> !ev)
    event.preventDefault()
    
    console.log(vision)
  }, [vision]);

  return (<>
    <td onClick={visionHell} className="tds numberScores">{point}</td>
    {vision && (
    <div className="quest-container">
    <h3 className="quest-title">{description}</h3>
    <input type="text" name="answer" />
    <button type="click">Ответить</button>

    </div>
)}
    </>
  );
};

export default ModalQuestion;
