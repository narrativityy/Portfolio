import'./output.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div id='body' className='text-slate-100'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
