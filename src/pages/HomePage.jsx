import Header from "../components/Header";
import Card from "../components/MemeCard";

function HomePage() {
    return (
        <div>
            <Header />
            <div className="wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default HomePage;