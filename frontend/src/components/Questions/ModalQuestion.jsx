import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questions.css';
import { RIGHT_ANSWER, WRONG_ANSWER } from '../../store/auth/actionTypes';




const ModalQuestion = ({description, answer, id, point}) => {


  const [vision, setVision] = useState(false)
  const dispatch = useDispatch();

  const visionHell = useCallback((event) => {
    setVision((ev)=> !ev)
    event.preventDefault()
    
    console.log(vision)
  }, [vision]);

  const answerHandler = useCallback((event) => {
    event.preventDefault();
    const otvet = event.target.answer.value

    if (otvet.trim().toLowerCase() === answer.toLowerCase()) {
      alert('Правильно! братОК')
      setVision((ev) => !ev)
      dispatch({
        type: RIGHT_ANSWER, payload: point
      })
      
    } else {
      alert(`Неправильно! Правильный ответ: "${answer}"`)
      setVision((ev) => !ev)
      dispatch({
        type: WRONG_ANSWER, payload: point
      })
    }
  }
  )
  
  return (<>
    <td onClick={visionHell} className="tds numberScores">{point}</td>
    {vision && (
    <div className="quest-container">
    <h3 className="quest-title">{description}</h3>
    <form onSubmit={answerHandler}>
      <input type="text" name="answer" autoComplete="off" />
      <button type="submit">Ответить</button>
    </form>
    </div>
)}
    </>
  );
};

export default ModalQuestion;
