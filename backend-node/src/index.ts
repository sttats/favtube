import express from 'express'; 
import { fileURLToPath } from 'url';
import path from 'path';
import type { ApiHello } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// CORS ヘッダーを全レスポンスに付与
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { res.sendStatus(204); return; }
    next();
});

// フロントエンドの静的配置
const publicDir = path.join(__dirname, "..", "..", "frontend");
app.use(express.static(publicDir));

app.get("/api/node/hello", (req, res) => {
    const message: ApiHello = { message: "Hello, Node.js Ver2!" };
    res.json(message);
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Server is running on port 3000");
});

