import Button from "./components/button";
import Card from "./components/card";
import NavBar from "./components/navbar";
import './App.css'

function App() {
  

  return (
    <>
      <NavBar />
      <h1>This is a test</h1>
      <div className='todocomponent'>
        <Card className='todolist' />
        </div>
      <Card />
      <Card />
      <Button />
    </>
  )
}

export default App
