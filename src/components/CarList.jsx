import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store"

const CarList = ({ list }) => {
  const dispatch = useDispatch()
  const { name } = useSelector((state) => state.form)

  const handleCarDelete = (carId) => {
    dispatch(deleteCar(carId))
  }
  const carsList = list.map((car) => {
    const partialMatch =
      name.length && car.name.toLowerCase().includes(name.toLowerCase())

    console.log("partial match for:", car.name, partialMatch)
    return (
      <div key={car.id} className={`panel ${partialMatch && "bold"}`}>
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
