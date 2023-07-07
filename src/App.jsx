import "./App.css"
import CarForm from "./components/CarForm"
import CarSearch from "./components/CarSearch"
import CarList from "./components/CarList"
import CarValue from "./components/CarValue"
import { store } from "./store"

function App() {
  console.log(store.getState())
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
    </div>
  )
}

export default App
