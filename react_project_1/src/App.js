
import React from "react"


function App() {
  const date = new Date()
  const hours = date.gethours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  }
  else if (hours > 12 && hours < 17) {
    timeOfDay = "afternoon"
  }
  else {
    timeOfDay = "night"
  }
 
 return (
  <h1> Good {timeOfDay}! </h1>
  )
}
