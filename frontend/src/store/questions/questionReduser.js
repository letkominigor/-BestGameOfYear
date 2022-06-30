const INIT_QUESTIONS = 'INIT_QUESTIONS'

const initialState = {
  topics: [],
  questions: []
}

export default function questionReducer(state = initialState, action){
  switch(action.type){
    case INIT_QUESTIONS:
      const stateCopy =  action.payload;
      
      return stateCopy;
    default: return state
  }
  
}
