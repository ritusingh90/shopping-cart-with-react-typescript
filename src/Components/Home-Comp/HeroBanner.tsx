import { Link } from "react-router-dom"

const HeroBanner = () => {
    return (
        <div className="herobanner-wrap" style={{maxHeight: '250px'}}>
            <Link to="/store" ><img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PUSH/PC_Hero_3000x1200_NTA_2X._CB599338253_.jpg" alt="" className="w-100 h-100"/></Link>
        </div>
    )
}

export default HeroBanner