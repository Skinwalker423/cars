import React from "react"
import { store } from "../store"

const CarList = () => {
  const { cars } = store.getState().cars
  console.log(cars)
  const carsList = cars.map((car) => {
    return (
      <div key={car.id}>
        <h1>{car.name}</h1>
        <p>{car.cost}</p>
      </div>
    )
  })
  return <div>{carsList}</div>
}

export default CarList
