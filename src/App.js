import React from "react"
import AddNewTask from "./NewTaskForm.js"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  
  return (
    <>
    <header>
      <h1>Things To Do:</h1>
      <button>Add New Task</button>
      <AddNewTask />
    </header>
    <div class="to-do-list">
      { /* To-Do-Items GO HERE */}
    </div>
    </>
  )
}

export default App;
