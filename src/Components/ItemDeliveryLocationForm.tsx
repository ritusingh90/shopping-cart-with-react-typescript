
import { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { IoLocationSharp } from "react-icons/io5";
// import { ShoppingDataCartContext } from '../context/ShopingCartContext';

// type ShoppingCartProps1 = {
//     modalShow: boolean
// }

const ItemDeliveryLocationFrom = () => {

const [modalShow, setModalShowShow] = useState(false);

  const handleClose = () => setModalShowShow(false);
  const handleShow = () => setModalShowShow(true);
// const {handleClose, handleShow} = ShoppingDataCartContext() 

    return (
        <>
             <Button variant="" onClick={handleShow} className='font-12'>
                <IoLocationSharp/>
                <span className='ps-2 text-teal'>Select delivery location</span>
            </Button>

            <Modal show={modalShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose your location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Select a delivery location to see product availability and delivery options</p>
                    <Button variant="" className='btn btn-yellow d-block w-100'>Sign in to see your address</Button>
                    <p>or enter an Indian pincode</p>
                    <div>
                        <input type="text" readOnly/>
                        <Button variant='outline-dark'>Apply</Button>
                    </div>
                    <p>or</p>
                    <div>
                        <select className='w-100'>
                            <option>Deliver outside India</option>
                            <option>Bangladesh</option>
                            <option>Sri Lanka</option>
                        </select>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default ItemDeliveryLocationFrom