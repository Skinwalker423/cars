import React from "react"

const CarSearch = () => {
  return (
    <div className="car-form panel">
      <form action="">
        <h1 className="subtitle is-3">My Cars</h1>
        <div className="field-group">
          <div className="field">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              name="search"
              className="input is-expanded"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarSearch
