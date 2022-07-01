import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Registration from '../Registration/Registration';
import store from '../../store';

function App() {
  return (
    <Provider store={store}>
    <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </Provider>
  );
}

export default App;
