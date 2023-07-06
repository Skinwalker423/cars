import { configureStore } from "@reduxjs/toolkit"
import { carsReducer } from "./slices/carSlice"
import { formReducer } from "./slices/formSlice"
import { addCar, deleteCar, changeTerm } from "./slices/carSlice"
import { changeName, changeCost } from "./slices/formSlice"

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

export { store, addCar, deleteCar, changeCost, changeName, changeTerm }
