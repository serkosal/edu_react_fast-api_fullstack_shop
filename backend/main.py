import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import hashlib

from models import Product, Products, TokenResponse, LoginRequest
from db import mock_db, fake_user_db

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


@app.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):
    hashed = fake_user_db.get(data.username)
    data_hashed = hashlib.sha256(data.password.encode()).hexdigest()
    print(hashed, data_hashed)
    if not hashed or not hashed == data_hashed:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    token = hashlib.sha256("random".encode()).hexdigest()
    return {"access_token": token}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)