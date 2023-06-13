import Main from "./components/Main"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
      </Routes>

    </Router>
  )
}

export default App
