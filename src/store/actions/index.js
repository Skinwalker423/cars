import { createAction } from "@reduxjs/toolkit"
import { addCar } from "../slices/carSlice"

export const resetCarForm = createAction(addCar)
