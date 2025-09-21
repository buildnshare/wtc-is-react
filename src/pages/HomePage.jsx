import Header from "../components/Header";
import Card from "../components/MemeCard";
import { useEffect, useState } from "react";

function HomePage() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        let response = JSON.parse(localStorage.getItem('memes'))
        setMemes(response);
    },[])

    return (
        <div>
            <Header />
            <div className="wrap">
                {memes.map((item, index) => (
                    <Card key={index} src={item.link} caption={item.caption} user={item.profile} uid={index}/>
                ))}
            </div>
        </div>
    );
}

export default HomePage;