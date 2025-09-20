import '../style/MemeCard.css'

function Card() {
  return (
    <div className="card">
        <div className="meme-image">
          <img src="meme-1.jpg" alt="Meme" />
        </div>
        <div className="meme-content">
          <p>When code runs on first try...</p>
          <button className="like-btn">Like</button>
        </div>
        <div className="meme-footer">
          <div className="user-info">
            <img src="https://avatar.iran.liara.run/public/50" alt="User" />
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
  )
} 

export default Card;