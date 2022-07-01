import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../NavBar/NavBar';

import Questions from '../Questions/Questions';
import store from '../../store';
import Main from '../Main/Main';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

function App() {
  return (
    <Provider store={store}>

    <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/game' element={<Questions/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </Provider>
  );
}

export default App;
