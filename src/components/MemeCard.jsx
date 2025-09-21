import { useEffect, useState } from 'react';
import '../styles/MemeCard.css'

function Card(prop) { 
  const [like, setlike] = useState(false);

  useEffect(() => {
    let memes = JSON.parse(localStorage.getItem('memes'))

    const likeProperty = memes[prop.uid].like;

    setlike(likeProperty);
  }, [])
  const toggleLike = () => {

    const newLike = !like;
    setlike(newLike);
    
    let memes = JSON.parse(localStorage.getItem('memes'));
    const meme = memes[prop.uid];
    meme.like = newLike;

    memes[prop.uid] = meme;
    localStorage.setItem('memes', JSON.stringify(memes));
  }

  return (
    <div className="card">
        <div className="meme-image">
          <img src={prop.src}alt="Meme" />
        </div>
        <div className="meme-content">
          <p>{prop.caption}</p>
          <button className="like-btn" onClick={toggleLike}>{like == true ? 'liked': 'like'}</button>
        </div>
        <div className="meme-footer">
          <div className="user-info">
            <img src={prop.user} alt="User" />
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
  )
}

export default Card;

