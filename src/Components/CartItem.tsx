import { Button, Stack } from "react-bootstrap"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import storeItems from "../data/items.json"
import FormatCurrency from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    qnty: number
}

const CartItem = ({id, qnty}: CartItemProps) => {
    const {removeFromCart,increaseCartQnty, decreaseCartQnty} = ShoppingDataCartContext()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <>
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img src={item.imgUrl} alt="" style={{ width: "100px", height: "75px", objectFit: "cover" }}/>
                <div className="me-auto">
                    <div>
                        {item.name}{" "}
                        {qnty > 1 && (
                            <span className="text-muted">x{qnty}</span>
                        )}
                    </div>
                    <div className="text-muted">
                        {FormatCurrency(item.price)}
                    </div>
                    
                </div>
                <div className="d-flex flex-column">
                    <div>{FormatCurrency(item.price * qnty)}</div>
                    <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                        <div className="d-flex align-items-center " style={{gap: '.5rem'}}>
                            <Button onClick={() => increaseCartQnty(id)}>+</Button>
                            <div className="fs-3">{qnty}</div>
                            <Button onClick={() => decreaseCartQnty(id)}>-</Button>
                        </div>
                    </div>
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)} >
                    &times;
                </Button>
            </Stack>
        </>
    )
}

export default CartItem