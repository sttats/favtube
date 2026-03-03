FROM node:20

WORKDIR /app

# 依存インストール（キャッシュ活用）
# ルートコンテキストなので backend-node/ と packages/types/ を含む
COPY backend-node/package*.json ./
COPY packages/types /packages/types

RUN npm install

# ソースをコピーしてビルド
COPY backend-node/ .
RUN npx tsc

EXPOSE 3000
CMD ["node", "./dist/index.js"]