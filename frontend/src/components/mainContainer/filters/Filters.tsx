import "./filters.css"

export default function Filters(){
    return <div className="Filters">
        <h2>Filters:</h2>

        <input type="checkbox" id="onStock" name="onStock" value="Yes"/>
        <label htmlFor="onStock">Show only products availables for buy</label><br/>

        Price from 
        <input type="number" id="priceFrom" name="priceFrom" value="10"/>
        to 
        <input type="number" id="priceTo" name="priceTo" value="999" max={9999}/>

        Reviews
        
    </div>
}