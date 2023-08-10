import { Col, Container, Row } from "react-bootstrap"
import StoreItems from "../Components/StoreItems"
import StorItem from '../data/items.json'
import { useState } from "react";
import FilterButton from "../Components/FilterButton";

const Store = () => {
    const [item, setItem] = useState(StorItem); 

    const menuItems = [...new Set(StorItem.map((Val) => Val.category))];

    const filterItem = (curcat:string) => {
        const newItem = StorItem.filter((newVal) => {
          return newVal.category === curcat;
        });
        setItem(newItem);
      };


      console.log("Dfdsf", item)

    return (
        <Container fluid>
            <div className="d-flex justify-content-between">
                <h2>Store</h2>
                <FilterButton filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}/>
            </div>
            
           

            <Row md={3} xs={1} lg={4} className="g-3 list-item-wrap">
                
                {
                    item.map((item) => (
                        <Col key={item.id}>
                            <StoreItems {...item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Store