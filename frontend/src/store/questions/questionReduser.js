export const INIT_QUESTIONS = 'INIT_QUESTIONS'

const initialState = {
  themes: [],
  questions: []
}

export default function questionReducer(state = initialState, action){
  switch(action.type){
    case INIT_QUESTIONS:
      const stateCopy =  action.payload;
      
      return {...stateCopy, themes: action.payload.themes,questions: action.payload.questions};
    default: return state
  }
  
}
