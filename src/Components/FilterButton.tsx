import StoreItems from '../data/items.json'

type FilterButtonProps = {
    filterItem: Function
    setItem: Function
    menuItems: string[]
}

const FilterButton = ({ filterItem, setItem, menuItems}: FilterButtonProps) => {

    return (
        <div className="d-flex justify-content-center mb-4">
            <button className="p-1 px-3 mx-1 fw-normal btn text-capitalize" onClick={() => setItem(StoreItems)}>
                All
            </button>
            {menuItems.map((Val:string, id:number) => {
                return (
                    <button className="p-1 px-2 mx-1 btn fw-normal text-capitalize" onClick={() => filterItem(Val)} key={id}>
                        {Val}
                    </button>
                );
            })}
                    
        </div>
    )
}

export default FilterButton