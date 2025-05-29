from typing import List, Dict
import hashlib 

from models import Product

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


fake_user_db = {
    "admin": hashlib.sha256("secret123".encode()).hexdigest()
}