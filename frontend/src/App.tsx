import { useState } from 'react'

import './App.css'
import type { ApiHello } from '@favtube/types'

function App() {
  const [nodeMessage, setNodeMessage] = useState<string>("まだ")
  const [fastAPIMessage, setFastAPIMessage] = useState<string>("まだ")
  const [goMessage, setGoMessage] = useState<string>("まだ")
  const [csMessage, setCsMessage] = useState<string>("まだ")
  const [javaMessage, setJavaMessage] = useState<string>("まだ")

  const handleNodeClick = async () => {
    try {
      const res = await fetch('/api/node/hello');
      const data: ApiHello = await res.json();
      setNodeMessage(data.message);

    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

    const handleFastAPIClick = async () => {
      try {
        const res = await fetch('/api/fastapi/hello');
        const data = await res.json();
        setFastAPIMessage(data.message);

      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }

    const handleGoClick = async () => {
      try {
        const res = await fetch('/api/go/hello');
        const data = await res.json();
        setGoMessage(data.message);

      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }

    const handleCsClick = async () => {
      try {
        const res = await fetch('/api/cs/hello');
        const data = await res.json();
        setCsMessage(data.message);

      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }

    const handleJavaClick = async () => {
      try {
        const res = await fetch('/api/java/hello');
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
