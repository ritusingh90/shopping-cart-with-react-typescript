import { Offcanvas, Stack } from "react-bootstrap"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import CartItem from "./CartItem"
import FormatCurrency from "../utilities/formatCurrency"
import storeItems from '../data/items.json'
import { Link } from "react-router-dom"

type ShoppingCartProps = {
    // id: number
    isOpen: boolean
}

const ShoppingCart = ({isOpen}:ShoppingCartProps) => {

    const {closeCart, cartItems} = ShoppingDataCartContext()

    // console.log("sdqwdq", cartItems.length)

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.length ? (<>
                        {
                        cartItems.map(item => (
                            <CartItem key={item.id} {...item}></CartItem>
                        ))
                    }
                    <div className="ms-auto fw-bold fs-5">
                        Total: {" "}
                        {FormatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.qnty
                        }, 0)
                        )}
                    </div>

                    <div className="btn-wrap">
                        <Link to="/checkout" onClick={closeCart} className="d-block mb-2 btn btn-yellow">Cart</Link>
                        <Link to="/checkout" onClick={closeCart} className="btn btn-orange d-block">Proceed to Checkout</Link>
                    </div>
                    </>) : (
                        <div className='text-center p-5'>
                            <p>Your Cart is Empty</p>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png?f=webp" alt="" style={{width: "200px"}}/>
                        </div>
                    )}
                    
                    
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart