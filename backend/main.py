import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

class Product(BaseModel):
    name: str
    img_src: str
    description: str 


class Products(BaseModel):
    products: List[Product]

mock_db : Dict[str, List[Product]] = {
    "products": [
        Product(name="CPU i3-4330", img_src="./cpu.png", description="This is intel processor, pretty old now."),
        Product(name="GPU MSI RTX 2050 ti", img_src="./video_card.png", description="This is a video card."),
        Product(name="HDD", img_src="./hdd.png", description=""),
        Product(name="Motherboard", img_src="./motherboard.png", description=""),
        Product(name="PSU", img_src="./psu.png", description=""),
        Product(name="RAM", img_src="./ram.png", description=""),
        Product(name="SSD", img_src="./ssd.png", description=""),
    ] 
}


app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://192.168.5.6:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get(path="/products", response_model=Products)
def get_products():
    return Products(products=mock_db["products"]) 

@app.post("/products")
def add_product(product: Product):
    mock_db["products"].append(product)

    return product


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)