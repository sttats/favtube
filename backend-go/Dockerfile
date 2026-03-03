FROM golang:1.23-alpine

# Use /favtube as the container root to match repository layout
WORKDIR /favtube

COPY backend-go/go.mod backend-go/go.sum /favtube/backend-go/
WORKDIR /favtube/backend-go
RUN go mod download

# Copy the whole project (frontend, backend, packages) into image
WORKDIR /favtube
COPY . .

WORKDIR /favtube/backend-go
RUN go build -o server main.go
EXPOSE 3002


CMD ["./server"]