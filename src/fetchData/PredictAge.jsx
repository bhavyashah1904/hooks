import axios from 'axios'
import React,{useState, useEffect} from 'react'

//Button
//Input Name
//axios call
//pass the name to axios call
//Display the output
const PredictAge = () => {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setAge(res.data.age)
      console.log(age)
    })
  }
  
  return (
    <div>
      <h1>Predict Age</h1>
      <input type= "text" onChange={handleChange} placeholder = "Enter Name"/>
      <button onClick={fetchData}>Find Age</button>
      {age}
    </div>
  )
}

export default PredictAge;