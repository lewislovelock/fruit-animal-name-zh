import json
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


def load_json(filename):
    with open(filename, "r", encoding="utf-8") as f:
        return json.load(f)


fruits = load_json("fruits.json")
animals = load_json("animals.json")


@app.get("/nickname")
def get_nickname():
    fruit_key = random.choice(list(fruits.keys()))
    animal_key = random.choice(list(animals.keys()))
    nickname = fruit_key + animal_key
    emoji = fruits[fruit_key] + animals[animal_key]
    return {"nickname": nickname, "emoji": emoji}
