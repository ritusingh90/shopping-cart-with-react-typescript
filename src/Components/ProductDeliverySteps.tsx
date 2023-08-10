import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const ProductDeliverySteps = () => {
    return (
        <Row md={6} xs={1} lg={6} className="g-3 product-delivery-wrap">
            <Col>
                <Link to="/" className="text-decoration-none text-teal">
                    <div className="block-wrap">
                        <div className="img-wrap">
                            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' alt=""/>
                        </div>
                        <div className="content-wrap">
                            <p className="font-12"> 7 days Replacement by Brand </p>
                        </div>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to="/" className="text-decoration-none text-teal">
                    <div className="block-wrap">
                        <div className="img-wrap">
                            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png' alt=""/>
                        </div>
                        <div className="content-wrap">
                            <p className="font-12">  Free Delivery  </p>
                        </div>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to="/" className="text-decoration-none text-teal">
                    <div className="block-wrap">
                        <div className="img-wrap">
                            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png' alt=""/>
                        </div>
                        <div className="content-wrap">
                            <p className="font-12">  1 Year Warranty </p>
                        </div>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to="/" className="text-decoration-none text-teal">
                    <div className="block-wrap">
                        <div className="img-wrap">
                            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png' alt=""/>
                        </div>
                        <div className="content-wrap">
                            <p className="font-12"> Top Brand </p>
                        </div>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to="/" className="text-decoration-none text-teal">
                    <div className="block-wrap">
                        <div className="img-wrap">
                            <img src='https://m.media-amazon.com/images/G/31/VAS/TrustWidget/Service._CB607276514_.png' alt=""/>
                        </div>
                        <div className="content-wrap">
                            <p className="font-12"> Device Set-up available  </p>
                        </div>
                    </div>
                </Link>
            </Col>
            <Col>
                <Link to="/" className="text-decoration-none text-teal">
                    <div className="block-wrap">
                        <div className="img-wrap">
                            <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png' alt=""/>
                        </div>
                        <div className="content-wrap">
                            <p className="font-12"> Amazon Delivered </p>
                        </div>
                    </div>
                </Link>
            </Col>
        </Row>
    )
}

export default ProductDeliverySteps