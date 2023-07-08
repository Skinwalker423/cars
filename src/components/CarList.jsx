import React from "react"
import { useDispatch } from "react-redux"
import { deleteCar } from "../store"

const CarList = ({ list }) => {
  const dispatch = useDispatch()

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

  return (
    <div>
      <div className="car-list">{carsList}</div>
    </div>
  )
}

export default CarList
