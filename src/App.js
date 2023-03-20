import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DiseaseDetection from "./pages/DiseaseDetection"
import Home from "./pages/Home"
import SoilAnalysis from "./pages/SoilAnalysis"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soil_analysis" element={<SoilAnalysis />} />
          <Route path="/disease_detection" element={<DiseaseDetection />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
