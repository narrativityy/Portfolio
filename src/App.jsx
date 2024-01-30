import'./output.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'

function App() {

  return (
    <div id='body' className='text-slate-100'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
