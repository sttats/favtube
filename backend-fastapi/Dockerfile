FROM python:3.12-slim

# Use /favtube as the container root to match repository layout
WORKDIR /favtube

COPY backend-fastapi/requirements.txt /favtube/backend-fastapi/
RUN pip install --no-cache-dir -r /favtube/backend-fastapi/requirements.txt

# Copy the whole project (frontend, backend, packages) into image
COPY . .

EXPOSE 3001
WORKDIR /favtube/backend-fastapi
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3001"]