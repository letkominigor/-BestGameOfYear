import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import questionReducer from './questions/questionReduser'

export default combineReducers({
  auth: authReducer,
  questions: questionReducer
})
