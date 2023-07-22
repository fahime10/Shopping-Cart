import './main.css'
import reactLogo from './assets/react.svg'
import MenuBar from './components/MenuBar'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <MenuBar />
      <HomePage />
      <footer>Developed by Fahim Ahmed <img src={reactLogo} /></footer>
    </>
  )
}

export default App
