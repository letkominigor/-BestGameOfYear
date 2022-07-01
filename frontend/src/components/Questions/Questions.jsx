import React, { useEffect} from 'react';
import './questions.css';
import { useDispatch, useSelector } from 'react-redux';




const Questions = () => {
  
  
  const dispatch = useDispatch();
  const quest = useSelector((state) => state.questions);
  console.log(quest);
  useEffect(() => {
    fetch('/questions')
      .then((response) => response.json())
      .then((questions) => dispatch({ type: 'INIT_QUESTIONS', payload: questions }));
  }, [dispatch]);

  return (

<>
<div>{JSON.stringify(quest)}</div>
{/* {quest.map((el) => <NewQuest key={el.id} id={el.id} questions={el.questions} variants={el.variants} />)} */}
</>

  );
};

export default Questions;
