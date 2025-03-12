import { useEffect } from "react"
import { useState } from "react"

function App(){
  const [currentTab,setCurrentTab] = useState("feed")

  useEffect(function(){
    
  },[currentTab])

  return <div>
    <button onClick={()=>{
      setCurrentTab("feed")
    }} style={{color : currentTab == "feed" ? "red" : "black"}}>Feed</button>
    <button onClick={()=>{
      setCurrentTab("Notification")
    }} style={{color : currentTab == "Notification" ? "red" : "black"}}>Notification</button>
    <button onClick={()=>{
      setCurrentTab("Messages")
    }} style={{color : currentTab == "Messages" ? "red" : "black"}}>Messages</button>
    <button onClick={()=>{
      setCurrentTab("Jobs")
    }} style={{color : currentTab == "Jobs" ? "red" : "black"}}>Jobs</button>
  </div>

}

export default App