import './App.css'
import Header from './components/Header'
import Card from './components/MemeCard';

function App() {

  return (
    <>
      <Header />
      <div className='wrap'>
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default App
