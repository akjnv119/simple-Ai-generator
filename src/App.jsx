import { useState } from 'react'
import axios from "axios";

import './App.css'

function App() {
  const[joke ,setJoke] = useState("")
  const[loading,setLoading]= useState(false)

  const getJoke = async () => {
    try {
      setLoading(true)
        const res = await axios.post(
        "https://backend-for-ai-joke-generator.onrender.com/api/joke",
        { category : "all" }
        
      )
      setJoke(res.data.joke)
    } catch (error) {
     console.error(error);
     setJoke("Error generating joke 😢");
      
    }finally {
      setLoading(false);
    }
    
  }

  return (
   <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>😂 AI Joke Generator</h1>
      <button onClick={getJoke}>
        {loading ? "Thinking..." : "Generate Joke"}
      </button>
      <p style={{ marginTop: "20px" }}>{joke}</p>
    </div>
  )
}

export default App
