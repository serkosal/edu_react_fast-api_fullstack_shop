import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

class Product(BaseModel):
    name: str
    image_path: str
    description: str 


class Products(BaseModel):
    products: List[Product]

mock_db : Dict[str, List[Product]] = {
    "products": [
        Product(name="CPU i3-4330", image_path="cpu.png", description="This is intel processor, pretty old now."),
    ] 
}


app = FastAPI()

origins = [
    "https://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
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