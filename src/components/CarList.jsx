import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteCar } from "../store"
import CarValue from "./CarValue"

const CarList = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => {
    const searchTerm = state.cars.searchTerm.toString().toLowerCase()
    const data = state.cars.list
    if (!searchTerm) return data

    return data.filter((car) => {
      return (
        car.name.toLowerCase().includes(searchTerm) ||
        car.cost.toString().includes(searchTerm)
      )
    })
  })
  console.log(list)

  const handleCarDelete = (carId) => {
    dispatch(deleteCar(carId))
  }
  const carsList = list.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          type="button"
          onClick={() => handleCarDelete(car.id)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    )
  })

  const carValue =
    list.length > 0
      ? list.reduce((acc, obj) => {
          return acc + obj.cost
        }, 0)
      : 0

  console.log("car value:", carValue)

  return (
    <div>
      <div className="car-list">{carsList}</div>
      <CarValue value={carValue} />
    </div>
  )
}

export default CarList
