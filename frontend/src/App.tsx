import { useState } from 'react'

import './App.css'
import type { ApiHello } from '@favtube/types'

// 本番(Vercel)では環境変数から各バックエンドのURLを取得
// ローカル開発では空文字にして vite.config.ts の proxy を使う
const API_NODE    = import.meta.env.VITE_API_NODE_URL    ?? ''
const API_FASTAPI = import.meta.env.VITE_API_FASTAPI_URL ?? ''
const API_GO      = import.meta.env.VITE_API_GO_URL      ?? ''
const API_CS      = import.meta.env.VITE_API_CS_URL      ?? ''
const API_JAVA    = import.meta.env.VITE_API_JAVA_URL    ?? ''

function App() {
  const [nodeMessage, setNodeMessage] = useState<string>("まだ")
  const [fastAPIMessage, setFastAPIMessage] = useState<string>("まだ")
  const [goMessage, setGoMessage] = useState<string>("まだ")
  const [csMessage, setCsMessage] = useState<string>("まだ")
  const [javaMessage, setJavaMessage] = useState<string>("まだ")

  const handleNodeClick = async () => {
    try {
      const res = await fetch(`${API_NODE}/api/node/hello`);
      const data: ApiHello = await res.json();
      setNodeMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  const handleFastAPIClick = async () => {
    try {
      const res = await fetch(`${API_FASTAPI}/api/fastapi/hello`);
      const data = await res.json();
      setFastAPIMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  const handleGoClick = async () => {
    try {
      const res = await fetch(`${API_GO}/api/go/hello`);
      const data = await res.json();
      setGoMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  const handleCsClick = async () => {
    try {
      const res = await fetch(`${API_CS}/api/cs/hello`);
      const data = await res.json();
      setCsMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  const handleJavaClick = async () => {
    try {
      const res = await fetch(`${API_JAVA}/api/java/hello`);
      const data = await res.json();
      setJavaMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  return (
    <div style={{ padding: "16px"}}>
      <h1>FavTube</h1>
      <button onClick={handleNodeClick} style={{ padding: "8px 16px", fontSize: "16px" }}>Node.js</button>
      <div>Result: {nodeMessage}</div>
      <div style={{ height: "16px" }}></div>
      <button onClick={handleFastAPIClick} style={{ padding: "8px 16px", fontSize: "16px" }}>FastAPI</button>
      <div>Result: {fastAPIMessage}</div>
      <div style={{ height: "16px" }}></div>
      <button onClick={handleGoClick} style={{ padding: "8px 16px", fontSize: "16px" }}>Go</button>
      <div>Result: {goMessage}</div>
      <div style={{ height: "16px" }}></div>
      <button onClick={handleCsClick} style={{ padding: "8px 16px", fontSize: "16px" }}>C#</button>
      <div>Result: {csMessage}</div>
      <div style={{ height: "16px" }}></div>
      <button onClick={handleJavaClick} style={{ padding: "8px 16px", fontSize: "16px" }}>Java</button>
      <div>Result: {javaMessage}</div>
    </div>
  )
}

export default App
