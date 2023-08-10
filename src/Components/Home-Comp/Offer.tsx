import { Row, Col, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Offer = () => {
    return (
        <>
            <Container fluid>
                <Row md={3} xs={1} lg={4} className="g-3 offer-wrapper">
                    <Col className="offer-col">
                        <div className="bg-white p-3 offer-block">
                            <h4 className="section-title">Keep shopping for</h4>
                            <Row md={2} xs={1} lg={2} className="g-3 keepShopping-wrap">
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://m.media-amazon.com/images/I/41S0hUXhmUL._MCnd_AC_.jpg" alt="" />
                                        </div>
                                        <p className="font-12">Laptops</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://m.media-amazon.com/images/I/41pxuURsEKL._MCnd_AC_.jpg" alt=""/>
                                        </div>
                                        <p className="font-12">Books</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://m.media-amazon.com/images/I/41A3+N9kORL._MCnd_AC_.jpg" alt=""/>
                                        </div>
                                        <p className="font-12">Men's running shoes</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://m.media-amazon.com/images/I/318fyJjaCFL._MCnd_AC_.jpg" alt=""/>
                                        </div>
                                        <p className="font-12">Action cameras</p>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="offer-col">
                        <div className="bg-white p-3  offer-block">
                        <h4 className="section-title">50% - 80% off | Men's fashion</h4>
                        <Row md={2} xs={1} lg={2} className="g-3">
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/AugART/QC/PCQC/Rev/MF-1._SY232_CB599377814_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p>Clothing</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/AugART/QC/PCQC/Rev/MF-4._SY232_CB599377814_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p>Footwear</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/AugART/QC/PCQC/Rev/MF-2._SY232_CB599377814_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p>Watches</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/AugART/QC/PCQC/Rev/MF-3._SY232_CB599377814_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p>Bags & Luggage</p>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="offer-col">
                        <div className="bg-white p-3  offer-block">
                            <h4 className="section-title">Great Freedom sale</h4>
                            <Link to="/store" className="text-black text-decoration-none">
                                <div className="img-wrap">
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/Shop-all-Deals_PC-CC_2Xwithoutstripe._SY608_CB599379717_.jpg" alt="" className="w-100"/>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col className="offer-col">
                        <div className="bg-white p-3  ">
                            <h4 className="section-title">Sign in for your best experience</h4>
                            <Button variant="warning">Sign in securely</Button>
                        </div>
                        <Link to="/store" className="text-black text-decoration-none">
                            <div className="p-4">
                                <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" className="w-100"/>
                            </div>
                        </Link>
                    </Col>
                </Row>
                
            </Container>
            
        </>
    )
}

export default Offer