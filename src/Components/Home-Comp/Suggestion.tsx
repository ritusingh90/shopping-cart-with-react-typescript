
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Suggestion = () => {
    return (
        <Container fluid>
                <Row md={3} xs={1} lg={4} className="g-3 offer-wrapper">
                    <Col className="offer-col">
                        <div className="bg-white p-3  offer-block">
                            <h4>Smartphones that suit your budget</h4>
                            <Row md={2} xs={1} lg={2} className="g-3">
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/AugART/23/MSO/Curation/D91103857_PC_QC_372x232_1._SY232_CB599068902_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Budget | Under ₹10,000</p>
                                    </Link> 
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/AugART/23/MSO/Curation/D91103857_PC_QC_372x232_2._SY232_CB599068902_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Mid range | ₹10,000 - ₹25,000</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/AugART/23/MSO/Curation/D91103857_PC_QC_372x232_3._SY232_CB599068902_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Premium | ₹25,000 - ₹40,000</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/AugART/23/MSO/Curation/D91103857_PC_QC_372x232_4._SY232_CB599068902_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Ultra premium | Above ₹40,000</p>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="offer-col">
                        <div className="bg-white p-3  offer-block">
                            <h4>Starting ₹129 | Monitors, storage, accessories & more</h4>
                            <Link to="/store" className="text-black text-decoration-none">
                                <div className="img-wrap">
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/aa23/pdacc/gw/unrec/PC_CC_758x608._SY608_CB599426206_.jpg" alt="" className="w-100"/>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col className="offer-col">
                        <div className="bg-white p-3  offer-block">
                            <h4>Starting ₹79 | Home, kitchen & outdoors</h4>
                            <Row md={2} xs={1} lg={2} className="g-3">
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Augart23PCQC/Unrec/1/Home_2._SY232_CB598848284_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Home decor & essentials</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Augart23PCQC/Unrec/1/Knd_2._SY232_CB598848284_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Cookware & Dining</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Augart23PCQC/Unrec/1/Furniture_2._SY232_CB598848284_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Furniture and mattresses</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Augart23PCQC/Unrec/1/HI_2._SY232_CB598848284_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Tools & home improvement</p>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="offer-col">
                        <div className="bg-white p-3  offer-block">
                            <h4>Cases and covers for top smartphones</h4>
                            <Row md={2} xs={1} lg={2} className="g-3">
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_372x232_1._SY232_CB599484702_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">iPhone 14 | Starting ₹89</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_372x232_2._SY232_CB599484702_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Samsung Galaxy S22 |Starting ₹79</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_372x232_3._SY232_CB599484702_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">OnePlus Nord CE 3 Lite | Starting ₹79</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/store" className="text-black text-decoration-none">
                                        <div className="img-wrap">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_372x232_4._SY232_CB599484702_.jpg" alt="" className="w-100"/>
                                        </div>
                                        <p className="font-12">Redmi 12C | Starting ₹79</p>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default Suggestion