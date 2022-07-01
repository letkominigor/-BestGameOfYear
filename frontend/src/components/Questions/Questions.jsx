import React, { useEffect} from 'react';
import './questions.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalQuestion from './ModalQuestion';
import { INIT_QUESTIONS } from '../../store/questions/questionReduser';

const Questions = () => {
  
  
  const dispatch = useDispatch();
  const quest = useSelector((state) => state.questions);
  console.log(quest);
  useEffect(() => {
    fetch('/questions')
      .then((response) => response.json())
      .then((questions) => dispatch({ type: INIT_QUESTIONS, payload: questions }));
  }, [dispatch]);

  return (

<>
{/* <div>{JSON.stringify(quest)}</div> */}
{quest.map((el) => <ModalQuestion key={el.id} id={el.id} questions={el.questions} answers={el.answers} />)}
</>

  );
};

export default Questions;
