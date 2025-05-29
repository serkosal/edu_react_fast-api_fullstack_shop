from pydantic import BaseModel
from typing import List

class Product(BaseModel):
    name: str
    img_src: str
    description: str 


class Products(BaseModel):
    products: List[Product]


class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
