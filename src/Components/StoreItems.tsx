import { Button, Card } from "react-bootstrap"
import FormatCurrency from "../utilities/formatCurrency"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import { Link } from "react-router-dom"

type StoreItemProps = {
    id: number,
    title: string,
    name: string,
    dicount: number,
    price: number,
    imgUrl: string
}

const StoreItems = ({id, name, price, imgUrl, title, dicount}: StoreItemProps) => {
    const  {getItemQnty, increaseCartQnty} = ShoppingDataCartContext()
    const qnty = getItemQnty(id);

    const discount_val = 100 - dicount

    const discount_price = (price * discount_val) / 100

    return (
        <>
            
            <Card className="h-100">
                <div className="img-wrap" style={{position: 'relative', paddingTop: '100%'}}>
                    <Link to={`/storedetail/${id}`}>
                        <Card.Img
                            variant="top"
                            src={imgUrl}
                        />
                    </Link>
                </div>
                
                <Card.Body className="d-flex flex-column ">
                    <div className="text-center py-2 "><span className="fw-bold">{title}</span></div>
                    <Link to={`/storedetail/${id}`} className="text-decoration-none text-muted">
                        <Card.Title className=" mb-4 items-title ">
                            <span className="fs-6">{name}</span>
                        </Card.Title>
                    </Link>
                    <div className="mb-3">
                        
                        <span className=" text-muted me-2 fs-4">{FormatCurrency(discount_price)}</span>
                        <small>M.R.P: <span className=" text-muted text-decoration-line-through">{FormatCurrency(price)}</span><br/><span>({dicount}%) off</span></small>
                    </div>
                    <div className="mt-auto">
                        <div className="d-flex">
                            <Button variant="warning" onClick={() => increaseCartQnty(id)} className="w-100 btn btn-yellow">Add to Cart</Button>
                           
                        </div>
                        {/* {qnty === 0 ? (<Button variant="warning" onClick={() => increaseCartQnty(id)} className="w-100">Add to Cart</Button>) : (
                            <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                                <div className="d-flex align-items-center " style={{gap: '.5rem'}}>
                                    <Button onClick={() => increaseCartQnty(id)}>+</Button>
                                    <div className="fs-3">{qnty}</div>
                                    <Button onClick={() => decreaseCartQnty(id)}>-</Button>
                                </div>
                                <Button variant="danger"  onClick={() => removeFromCart(id)} >Remove</Button>
                            </div>
                        )} */}
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItems