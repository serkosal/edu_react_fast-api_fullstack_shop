import "./product_card.css"

export interface Product {
    name: string;
    img_src?: string;
    description?: string; 
}

export default function ProductCard(
    {name, img_src, description} : Product
) {
    return <div className="ProductCard">
        <div className="ProductIcon">
            <img src={img_src} width={128} height={128}></img>
        </div>

        <div className="ProductPreviewInfo">
            <h2>{name}</h2>

            <p>{description}</p>
        </div>
    </div>
}