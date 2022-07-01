import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Question from '../Question/Question';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/question' element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
