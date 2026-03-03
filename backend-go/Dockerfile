FROM golang:1.23-alpine

WORKDIR /app

# 依存インストール（キャッシュ活用）
COPY go.mod go.sum ./
RUN go mod download

# ソースをコピーしてビルド
COPY . .
RUN go build -o server main.go

EXPOSE 3002
CMD ["./server"]