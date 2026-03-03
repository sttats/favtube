from fastapi import FastAPI

app = FastAPI()
@app.get("/api/fastapi/hello")
def read_hello():
    return {"message": "Hello from FastAPI!"}