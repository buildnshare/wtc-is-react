import { useEffect, useState } from "react";
import Card from "../components/MemeCard";

function LikePage() {
    const [meme, setMemes] = useState([]);

    useEffect(() => {
        const memes = JSON.parse(localStorage.getItem('memes'));
        const likedmemes = memes.filter(item => item.like);
        setMemes(likedmemes);
    }, [])

    return (
        <div className="wrap">
            {meme.map((item, index) => (
                <Card key={index} src={item.link} uid={item.uid} caption={item.caption} user={item.user} />
            ))}
        </div>
    );
}

export default LikePage;