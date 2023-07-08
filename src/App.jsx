import "./App.css"
import CarForm from "./components/CarForm"
import CarSearch from "./components/CarSearch"
import CarList from "./components/CarList"
import CarValue from "./components/CarValue"
import { useSelector } from "react-redux"

function App() {
  const list = useSelector((state) => {
    const searchTerm = state.cars.searchTerm.toString().toLowerCase()
    const data = state.cars.list
    if (!searchTerm) return data

    return data.filter((car) => {
      return (
        car.name.toLowerCase().includes(searchTerm) ||
        car.cost <= Number(searchTerm)
      )
    })
  })
  console.log(list)

  const carValue =
    list.length > 0
      ? list.reduce((acc, car) => {
          return acc + car.cost
        }, 0)
      : 0

  console.log("car value:", carValue)

  return (
    <div className="container is-fluid App">
      <CarForm />
      <CarSearch />
      <CarList list={list} />
      <CarValue value={carValue} />
    </div>
  )
}

export default App
