import { Offcanvas, Stack } from "react-bootstrap"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import CartItem from "./CartItem"
import FormatCurrency from "../utilities/formatCurrency"
import storeItems from '../data/items.json'

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}:ShoppingCartProps) => {

    const {closeCart, cartItems} = ShoppingDataCartContext()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
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
                    
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart