FROM node:20

WORKDIR /app

# 依存インストール（キャッシュ活用）
COPY backend-node/package*.json ./
COPY packages/ /packages/
RUN npm install

# ソースをコピーしてビルド
COPY backend-node/src/ ./src/
COPY backend-node/tsconfig.json ./

RUN npx tsc

EXPOSE 3000
CMD ["node", "./dist/index.js"]