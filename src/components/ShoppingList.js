import  plantList from '../data/plantList'


function ShoppingList() {
	return <ul>
        { plantList.map((plant,index)=>(
            <li key={`${plant}`-`${index}`}>{plant.name}</li>
        ))}
    </ul>
}

export default ShoppingList