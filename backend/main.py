import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Add a list of allowed origins (the frontend URL)
origins = [
    "http://localhost:3000",  # Add more origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins to make requests
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

def load_dict(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return [line.strip() for line in f]
    
fruits = load_dict('fruits.txt')
animals = load_dict('animals.txt')

@app.get("/nickname")
def get_nickname():
    nickname =  random.choice(fruits) + random.choice(animals)
    return {"nickname": nickname}