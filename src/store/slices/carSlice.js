import { createSlice, nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    list: [],
    searchTerm: "",
  },
  reducers: {
    addCar(state, action) {
      console.log("added car")
      state.list.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    deleteCar(state, action) {
      console.log("removed car")
      state.list = state.list.filter((car) => car.id !== action.payload)
    },
    changeTerm(state, action) {
      state.searchTerm = action.payload
    },
  },
})

export const { addCar, deleteCar, changeTerm } = carsSlice.actions
export const carsReducer = carsSlice.reducer
