import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

export const UseEffectTutorial = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data[0].email)
      console.log("count")
    })
  })
  
  return (
    <div>Data : {data}</div>
  )
}

export default UseEffectTutorial