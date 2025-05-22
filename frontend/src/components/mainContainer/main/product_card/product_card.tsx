import "./product_card.css"

export default function ProductCard(){
    return <div className="ProductCard">
        <div className="ProductIcon">
            <img src="./cpu.png" width={128} height={128}></img>
        </div>

        <div className="ProductPreviewInfo"></div>
    </div>
}