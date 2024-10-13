import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const sampleStudentData = [
    {
      name: "Hansi Piyimika",
      date: "16-09-2024",
      reg: "FSDC2401"
    },
    {
      name: "Isuri Tharuka",
      date: "16-09-2024",
      reg: "FSDC2402"
    },
    {
      name: "Athadudaralalage Tharuka Nadun Bandara",
      date: "16-09-2024",
      reg: "FSDC2403"
    }
  ]

  return (
    <>
      {
        sampleStudentData.map(
          (std) => {
            return(
              <div className="flex w-full justify-center">
                <div>{std.reg}</div>
                <div>{std.name}</div>
                <div>{std.date}</div>
                <button>Edit</button>
                <button>delete</button>
              </div>
            )
          }
        )
      }
    </>
  )
}

export default App
