# src/main.py
from . import app  # Importing app from __init__.py

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
