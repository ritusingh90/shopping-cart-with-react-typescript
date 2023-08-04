import { ReactNode, createContext, useContext, useState } from "react"
import ShoppingCart from "../Components/ShoppingCart"


type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    qnty: number
}


type ShoppingCartContext = {
    openCart : () => void
    closeCart : () => void
    getItemQnty : (id: number) => number
    increaseCartQnty : (id: number) => void
    decreaseCartQnty : (id:number) => void
    removeFromCart : (id:number) => void
    cartQnty : number
    cartItems: CartItem[]
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const ShoppingDataCartContext = () => {
    return (
        useContext(ShoppingCartContext)
    )
}

// export  ShoppingCartContext


export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])


    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const cartQnty = cartItems.reduce(
        (qnty, item) => item.qnty + qnty, 0
    )



    const getItemQnty = (id:number) => {
        return cartItems.find(item => item.id === id)?.qnty || 0
    }

    const increaseCartQnty = (id: number) => {
        setCartItems(carrItems => {
                if(carrItems.find(item => item.id === id) == null) {
                    return [...carrItems, {id, qnty: 1}]
                }else {
                    return carrItems.map(item => {
                        if(item.id === id) {
                            return {...item, qnty:item.qnty + 1}
                        } else {
                            return item
                        }
                    })
                }
            })
    }


    const decreaseCartQnty = (id:number) => {
        setCartItems(
            carrItems => {
                if(carrItems.find(item => item.id === id) === null) {
                    return carrItems.filter(item => item.id !== id)
                }else {
                    return carrItems.map(item => {
                        if(item.id === id) {
                            return {...item, qnty:item.qnty - 1}
                        } else {
                            return item
                        }
                    })
                }
            }
        )
    }

    const removeFromCart = (id: number) => {
        setCartItems(carrItems => {
            return carrItems.filter(item => item.id !== id)
        })
    }

   


    return (
        <ShoppingCartContext.Provider value={{getItemQnty, increaseCartQnty, decreaseCartQnty, removeFromCart, openCart, closeCart, cartQnty, cartItems}}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}

// export default ShoppingCartProvider