from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

# 1. ALLOW FRONTEND TO TALK TO BACKEND (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, change to your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    print(f"Received: {request.message}")
    
    # Simulate AI Logic
    responses = [
        "That is a great question!",
        "I am processing your data...",
        "Hello from Python Backend!",
        f"You said: {request.message}"
    ]
    
    return {"reply": random.choice(responses)}


@app.get("/users")
async def get_users():
    print("---Return the users---")

    users = {
        "Name": "Md Al Amin",
        "Uni": "NSU",
        "Company": "GTr"
    }
    return {
        "users": users
    }