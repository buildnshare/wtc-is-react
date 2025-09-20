
import './App.css'
import './styles/MemeCard.css';
import Card from './components/MemeCard';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <div className="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}



export default App
