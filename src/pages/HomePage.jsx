import Header from "../components/Header";
import Card from "../components/MemeCard";

function HomePage() {
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

export default HomePage;