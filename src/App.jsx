import "./App.css"
import CarForm from "./components/CarForm"
import CarSearch from "./components/CarSearch"
import CarList from "./components/CarList"
import CarValue from "./components/CarValue"
import { store } from "./store"

function App() {
  console.log(store.getState())
  return (
    <div className="App">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App