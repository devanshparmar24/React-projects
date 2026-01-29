import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <div className="container mx-auto p-4 max-w-lg mt-12 ">
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
