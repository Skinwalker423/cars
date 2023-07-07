import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeTerm } from "../store"

const CarSearch = () => {
  const dispatch = useDispatch()
  const { list, searchTerm } = useSelector((state) => state.cars)

  const handleChange = (e) => {
    const query = e.target.value || ""
    dispatch(changeTerm(query))
  }
  return (
    <div className="list-header">
      <h1 className="subtitle is-3">My Cars</h1>
      <div className="search field is-horizontal">
        <label className="label" htmlFor="search">
          Search
        </label>
        <input
          onChange={handleChange}
          value={searchTerm || ""}
          id="search"
          name="search"
          className="input is-expanded"
          type="text"
        />
      </div>
    </div>
  )
}

export default CarSearch
