import { useEffect, useState } from 'react'
import StoreItems from '../data/items.json'
import { Link, useParams } from 'react-router-dom'
import { Row, Col , ListGroup, Card, Button, OverlayTrigger, Popover, InputGroup, Form} from 'react-bootstrap'
import FormatCurrency from '../utilities/formatCurrency'
import ItemDeliveryLocationFrom from '../Components/ItemDeliveryLocationForm'
import ProductDeliverySteps from '../Components/ProductDeliverySteps'
import { ShoppingDataCartContext } from '../context/ShopingCartContext'
import { IoLockClosed } from "react-icons/io5";


type StoreItemProps = {
    id: number,
    title: string,
    name: string,
    dicount: number,
    price: number,
    imgUrl: string
    
    desc: {
        desc1: string
    }
}

type StoreDetailProps = {
    id: number,
}

const StoreDetail = ({id}:StoreDetailProps) => {
    // const  {increaseCartQnty} = ShoppingDataCartContext() 
    const [items, setItems] = useState<StoreItemProps[]>([])
    
    const {ids} = useParams();

    console.log("asdasfds", items);


    const numID = Number(ids)

    const compareItem = () => {
        let compareProductData = StoreItems.filter(item => item.id == numID);
        console.log("sdfsdfs", compareProductData)
        setItems(compareProductData)

    }

    useEffect(() => {
        compareItem();
        
    }, [ids])

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3" className='border-bottom'>Your transaction is secure</Popover.Header>
          <Popover.Body>
            We work hard to protect your security and privacy. Our payment security system encrypts your information during transmission. We don’t share your credit card details with third-party sellers, and we don’t sell your information to others. Learn more
          </Popover.Body>
        </Popover>
      );


    return (
        <div className='pt-5 container-fluid'>
            {
                items.map((item) => (
                    <Row md={2} xs={1} lg={2} key={item.id}>
                        <Col lg={3}><img src={item.imgUrl} alt="" className='w-100'/></Col>
                        <Col lg={6}>
                            <h2 className='mb-3'><span>{item.name}</span></h2>
                            <div className=''>
                                <p className=" mb-0 text-muted me-2 fs-4"><span>-{item.dicount}%</span> {FormatCurrency((((100 - item.dicount)) * item.price) / 100)}</p>
                                <small>M.R.P: <span className=" text-muted text-decoration-line-through">{FormatCurrency(item.price)}</span></small>
                                <p><small className='fw-bold'>Inclusive of all taxes</small></p>
                            </div>


                            <ProductDeliverySteps/>
                            <ListGroup className='border-top border-bottom py-3'>
                            {
                                item.desc.map((ii:any, index:any)=> (
                                    <ListGroup.Item key={index}>{ii.desc1}</ListGroup.Item>
                                ))
                            }
                            </ListGroup>
                        </Col>
                        
                       <Col lg={3}>
                            <Card>
                                <Card.Body >
                                    <div className='d-flex mb-2'>
                                        <div className='text-start'>
                                            <p className=" mb-0 text-muted me-2 fs-4">{FormatCurrency((((100 - item.dicount)) * item.price) / 100)}</p>
                                            <small>M.R.P: <span className=" text-muted text-decoration-line-through">{FormatCurrency(item.price)}</span></small>
                                            <p className='mb-0'>Save: <span>{FormatCurrency(item.price - (((100 - item.dicount) * item.price)) / 100 )}({item.dicount}%) off</span></p>
                                            <small className='fw-bold'>Inclusive of all taxes</small>
                                        </div>
                                    </div>
                                    <div>
                                        <ItemDeliveryLocationFrom/>
                                    </div>
                                    <div className='btn-wrap'>
                                        {/* <Button variant="" onClick={() => increaseCartQnty(id)} className="btn btn-yellow w-100 mb-2">increaseCartQnty(id) Add to Cart</Button> */}
                                        <Link to="/checkout" className='btn btn-orange w-100 my-2'>Buy Now</Link>
                                    </div>
                                    <div >

                                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} >
                                            <Button variant="" className='font-12 text-teal'><IoLockClosed/> Secure Transaction</Button>
                                        </OverlayTrigger>

                                        <InputGroup className="mb-2 mt-2">
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <Form.Control aria-label="Text input with checkbox"  value="Add gift options" readOnly/>
                                        </InputGroup>
                                    </div>
                                    {/* <div>
                                        <Button variant='warning' className='w-100 mb-4'>Add to Wishlist</Button>
                                    </div> */}
                                </Card.Body>
                            </Card>
                       </Col>
                        
                    </Row>
                ))
            }
        </div>
    )
}

export default StoreDetail