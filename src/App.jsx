import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import NewSong from './components/NewSong'
import SongSelection from './components/SongSelection'

function App() {
  const [selections, setSelections] = useState(["Despacito", "Summer Of 69", "Hotel California"])


  return (
    <BrowserRouter>
        <Nav />
        <h1>Sort</h1>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/selection" element={<SongSelection selections={selections}/>} />          
          <Route path="/song/new/:song" element={<NewSong />} />
          <Route path="*" element={ <h4>Page not found!</h4> } />          
        </Routes>  
    </BrowserRouter>
  )
}

export default App


// `["Despacito", "Summer Of 69", "Hotel California", "Single Ladies", "If I were a boy", "Run the World", "Waka Waka" ]`