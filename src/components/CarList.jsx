import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteCar } from "../store"

const CarList = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => {
    if (!state.cars.searchTerm) return state.cars.list

    return state.cars.list.filter((car) => {
      return (
        car.name.toLowerCase().includes(state.cars.searchTerm) ||
        car.cost.toString().includes(state.cars.searchTerm.toString())
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
  return <div className="car-list">{carsList}</div>
}

export default CarList
