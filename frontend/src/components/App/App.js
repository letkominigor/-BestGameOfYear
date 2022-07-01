import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Questions from '../Questions/Questions';
import store from '../../store'


function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Questions/>}>
          
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
