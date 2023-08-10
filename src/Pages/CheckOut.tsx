// import CartItem from "../Components/CartItem"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import FormatCurrency from "../utilities/formatCurrency"
import storeItems from '../data/items.json'
import { Col, Container, Row } from "react-bootstrap"
import CheckoutCartItem from "../Components/CheckoutCartItem"

type CheckOutProps = {
    id: number
}

const CheckOut = () => {
    const {cartItems} = ShoppingDataCartContext() 
    return (
        <Container fluid className="mt-4">
            <h3 className="mb-2">Shopping Cart</h3>
            <Row>
                <Col xs={9}>
                    <div className="bg-white p-3">
                        {
                            cartItems.map(item => (
                                <CheckoutCartItem key={item.id} {...item}></CheckoutCartItem>
                            ))
                        }
                        <div className="ms-auto fw-bold fs-5">
                            Subtotal ({cartItems.length} items) :
                            {FormatCurrency( 
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.qnty
                            }, 0)
                            )}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="bg-white p-3">
                        <div className="ms-auto fw-bold fs-5">
                                Subtotal ({cartItems.length} items) :
                                {FormatCurrency( 
                                cartItems.reduce((total, cartItem) => {
                                    const item = storeItems.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.qnty
                                }, 0)
                                )}
                        </div>
                    </div>
                </Col>
            </Row>
             
            
        </Container>
    )
}

export default CheckOut