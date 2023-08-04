import { Button, Card } from "react-bootstrap"
import FormatCurrency from "../utilities/formatCurrency"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItems = ({id, name, price, imgUrl}: StoreItemProps) => {
    const  {getItemQnty, increaseCartQnty, decreaseCartQnty, removeFromCart} = ShoppingDataCartContext()
    const qnty = getItemQnty(id);

    return (
        <>
            
            <Card className="h-100">
                <div className="img-wrap" style={{position: 'relative', paddingTop: '100%'}}>
                    <Card.Img
                        variant="top"
                        src={imgUrl}
                    />
                </div>
                
                <Card.Body className="d-flex flex-column ">

                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-6">{name}</span>
                        <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        {qnty === 0 ? (<Button onClick={() => increaseCartQnty(id)}>Add to Cart</Button>) : (
                            <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                                <div className="d-flex align-items-center " style={{gap: '.5rem'}}>
                                    <Button onClick={() => increaseCartQnty(id)}>+</Button>
                                    <div className="fs-3">{qnty}</div>
                                    <Button onClick={() => decreaseCartQnty(id)}>-</Button>
                                </div>
                                <Button variant="danger"  onClick={() => removeFromCart(id)}>Remove</Button>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItems