import { useState } from 'react';
import '../styles/MemeCard.css'

function Card(prop) { 

  const toggleLike = () => {}
  return (
    <div className="card">
        <div className="meme-image">
          <img src={prop.src}alt="Meme" />
        </div>
        <div className="meme-content">
          <p>{prop.caption}</p>
          <button className="like-btn">Like</button>
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

