import "../App.css"
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
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
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
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="carName">
              Car Name
            </label>
            <input
              className="input is-expanded"
              onChange={handleNameChange}
              value={name}
              id="carName"
              name="carName"
              type="text"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="carValue">
              Car Value
            </label>
            <input
              className="input is-expanded"
              onChange={handleValueChange}
              value={cost || ""}
              id="carValue"
              name="carValue"
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
