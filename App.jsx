import './App.css'
import Todo from "./todo.jsx"

let style2={
  color:"red",
  textDecoration:"underline red",
  
}

function App() {
  return (
    <>
     <h1 style={style2}>My To Do List</h1>
     <Todo task="Task : Gym" timings="Time : 6am to 7am" days="Days : Sat Su M T W T F" />
     <Todo task="Task : Yoga" timings="Time : 8am to 9am" days="Days : Sat Su M T W T F" />
     <Todo task="Task : Study" timings="Time : 10am to 3pm" days="Days : Sat Su M T W T F" />
     <Todo task="Task : Exercise" timings="Time : 5pm to 7pm" days="Days : Sat Su M T W T F" />
     <Todo task="Task : Coding" timings="Time : 8pm to 10pm" days="Days : Sat Su M T W T F" />
    </>
  )
}

export default App;
