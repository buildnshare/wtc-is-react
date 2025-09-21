import { Link } from 'react-router';
import '../styles/Header.css'

function Header() { 
  
  return (
    <header className="header">
      <h1 className="logo">
        <Link to='/'>Meme Gallery</Link>
      </h1>

      <div className="right-wrap">
        <Link to='liked'>Liked memes</Link>
        <button className="upload">
          <span>
            <Link to='/form'>+</Link>
          </span>
        </button>
        <div className="avatar">
          <img src="https://avatar.iran.liara.run/public/50" alt="User" />
        </div>
      </div>
    </header>
  )
}

export default Header;