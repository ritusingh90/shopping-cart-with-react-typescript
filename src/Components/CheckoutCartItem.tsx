import { Button, Col, Row, Stack } from "react-bootstrap"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import storeItems from "../data/items.json"
import FormatCurrency from "../utilities/formatCurrency"
import { Link } from "react-router-dom"

type CartItemProps = {
    id: number
    qnty: number
}

const CheckoutCartItem = ({id, qnty}: CartItemProps) => {
    const {removeFromCart,increaseCartQnty, decreaseCartQnty} = ShoppingDataCartContext()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <Row className="border m-3 p-3">
                <Col xs={2}>
                    <Link to={`/storedetail/${id}`}  style={{height: '120px'}}>
                        <img src={item.imgUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
                    </Link>
                </Col>
                <Col xs={10}>
                    <div className="text-muted ">
                        <h4>{item.name}</h4>
                        <p>{FormatCurrency(item.price)}</p>

                        <div className="d-flex">
                            {/* <div>{FormatCurrency(item.price * qnty)}</div> */}
                            <div className="d-flex align-items-center " style={{gap: '.5rem'}}>
                                <div className="d-flex align-items-center " style={{gap: '.5rem'}}>
                                    <Button onClick={() => increaseCartQnty(id)}>+</Button>
                                    <div className="fs-3">{qnty}</div>
                                    <Button onClick={() => decreaseCartQnty(id)}>-</Button>
                                </div>
                                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)} >
                                    &times;
                                </Button>
                            </div>
                        </div>
                        
                    </div>
                </Col>
        </Row>
    )
}

export default CheckoutCartItem