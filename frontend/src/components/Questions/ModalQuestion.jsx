import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questions.css';
import { RIGHT_ANSWER, WRONG_ANSWER } from '../../store/auth/actionTypes';




const ModalQuestion = ({description, answer, id, point}) => {
  const user = useSelector((state) => state.auth);


  const [vision, setVision] = useState(false)
  const [kek, setKek] = useState(true)
  const dispatch = useDispatch();

  const visionHell = useCallback((event) => {
    setVision((ev)=> !ev)
    event.preventDefault()
    
    console.log(vision)
  }, [vision]);

  const answerHandler = useCallback((event) => {
    event.preventDefault();
    const otvet = event.target.answer.value
    setKek(false)
    if (otvet.trim().toLowerCase() === answer.toLowerCase()) {
      fetch("/scores", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            score: point,
            login: user.login
        }),
      })
      alert('А ты харош!')
      setVision((ev) => !ev)
      dispatch({
        type: RIGHT_ANSWER, payload: point
      })
      
    } else {
      fetch("/scores", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            score: -point,
            login: user.login
        }),
      })
      alert(`Неправильно! Правильный ответ: "${answer}"`)
      setVision((ev) => !ev)
      dispatch({
        type: WRONG_ANSWER, payload: point
      })
    }
  }
  )
  
  return (<>
   {kek && (<td onClick={visionHell} className="tds numberScores">{point}</td>)}
    {vision && (
    <div className="quest-container">
    <h3 className="quest-title">{description}</h3>
    <form onSubmit={answerHandler}>
      <input type="text" name="answer" className="ple" autoComplete="off" />
      <button type="submit" sclassName="ple">Ответить</button>
    </form>
    </div>
)}
    </>
  );
};

export default ModalQuestion;
