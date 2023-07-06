import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { addCar } from "../store"

const CarForm = () => {
  const dispatch = useDispatch()
  const carNameRef = useRef()
  const carValueRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addCar({
        name: carNameRef.current.value,
        cost: carValueRef.current.value,
      }),
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="carName">Car Name</label>
        <input ref={carNameRef} id="carName" name="carName" type="text" />
        <label htmlFor="carValue">Car Value</label>
        <input ref={carValueRef} id="carValue" name="carValue" type="number" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CarForm
