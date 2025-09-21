
import './App.css'
import './styles/MemeCard.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router';
import FormPage from './pages/FormPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/form' element={<FormPage />} />
      </Routes>
    </>
  )
}



export default App
