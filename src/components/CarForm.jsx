import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCar, changeName, changeCost } from "../store"

const CarForm = () => {
  const dispatch = useDispatch()
  const { name, cost } = useSelector((state) => state.form)
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }

  const handleValueChange = (e) => {
    dispatch(changeCost(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addCar({
        name,
        cost,
      }),
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="carName">Car Name</label>
        <input
          onChange={handleNameChange}
          value={name}
          id="carName"
          name="carName"
          type="text"
        />
        <label htmlFor="carValue">Car Value</label>
        <input
          onChange={handleValueChange}
          value={cost}
          id="carValue"
          name="carValue"
          type="number"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CarForm
