
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import AdminPage from './components/AdminPage/AdminPage';
import StudentPage from './components/StudentPage/StudentPage';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/student' element={<StudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
