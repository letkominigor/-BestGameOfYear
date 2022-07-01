import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../NavBar/NavBar';

import Questions from '../Questions/Questions';
import store from '../../store';
import Main from '../Main/Main';


function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>

        <Route path='/' element={<Questions/>}/>
        

      </Routes>
    </Provider>
  );
}

export default App;
