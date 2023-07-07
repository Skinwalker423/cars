import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteCar } from "../store"

const CarList = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.cars)
  console.log(list)

  const handleCarDelete = (id) => {
    dispatch(deleteCar(id))
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
          X
        </button>
      </div>
    )
  })
  return <div>{carsList}</div>
}

export default CarList
