import HeroBanner from "../Components/Home-Comp/HeroBanner"
import Offer from "../Components/Home-Comp/Offer"
import Suggestion from "../Components/Home-Comp/Suggestion"
import Blockbuster from "../Components/Home-Comp/blockbuster"

const Home = () => {
    return (
        <>
            <HeroBanner/>
            <Offer/>
            <Suggestion/>
            <Blockbuster/>
            <Suggestion/>
        </>
    )
}

export default Home