import { useEffect, useState } from "react";
import Card from "../components/MemeCard";
import Header from "../components/Header";

function LikePage() {
    const [meme, setMemes] = useState([]);

    useEffect(() => {
        const memes = JSON.parse(localStorage.getItem('memes'));
        const likedmemes = memes.filter(item => item.like);
        setMemes(likedmemes);
    }, [])

    return (
        <div>
            <Header />
            <div className="wrap">
                {meme ?? meme.map((item, index) => (
                    <Card key={index} src={item.link} uid={index} caption={item.caption} user={item.profile} />
                ))}
            </div>
        </div>
    );
}

export default LikePage;