import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewQuestion from './NewQuestion'




const Question = () => {
  
  
  const dispatch = useDispatch();
  const quest = useSelector((state) => state.quest.quest);
  console.log(quest)

  useEffect(() => {
    fetch('http://localhost:2500')
      .then((response) => response.json())
      .then((question) => dispatch({ type: 'INIT_QUESTION', payload: question.questions }));
  }, [dispatch]);

  return (

<>
{quest.map((el) => <NewQuestion key={el.id} id={el.id} questions={el.questions} />)}
</>

  );
};

export default Question;
