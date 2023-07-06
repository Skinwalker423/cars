import { configureStore } from "@reduxjs/toolkit"
import { addCar, deleteCar, changeTerm, carsReducer } from "./slices/carSlice"
import { changeName, changeCost, formReducer } from "./slices/formSlice"

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

export { store, addCar, deleteCar, changeCost, changeName, changeTerm }
