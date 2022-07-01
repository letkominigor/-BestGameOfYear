import {AUTH_LOGIN} from './actionTypes'
import {AUTH_REG} from './actionTypes'
import { RIGHT_ANSWER } from './actionTypes';
import {WRONG_ANSWER} from './actionTypes';
import {AUTH_LOGOUT} from './actionTypes'

const initialState = {
  

};

export default function authReducer(state = initialState, action){
  switch (action.type){
    case AUTH_LOGIN: {
      const user = {
        id: action.payload.id,
        login: action.payload.login,
        scores: action.payload.scores,
      };
      return {...user}
    }
    case AUTH_REG: {
      const user = {
        id: action.payload.id,
        login: action.payload.login,
        scores: action.payload.scores,
      };
      return {...user}
    }
    case AUTH_LOGOUT: {
      return {}
    }
    case RIGHT_ANSWER: {
      return {...state, scores: state.scores + action.payload.points}
    }
    case WRONG_ANSWER: {
      return {...state, scores: state.scores - action.payload.points}
    }
    default: return state
  }
}
