FROM node:20

WORKDIR /app

# 依存インストール（キャッシュ活用）
COPY package*.json ./
RUN npm install

# ソースをコピーしてビルド
COPY src/ ./src/
COPY tsconfig.json ./

RUN npx tsc

EXPOSE 3000
CMD ["node", "./dist/index.js"]