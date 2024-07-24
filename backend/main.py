from fastapi import FastAPI
import random

app = FastAPI()

def load_dict(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return [line.strip() for line in f]
    
fruits = load_dict('fruits.txt')
animals = load_dict('animals.txt')

@app.get("/nickname")
def get_nickname():
    return random.choice(fruits) + random.choice(animals)
