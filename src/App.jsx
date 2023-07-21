import { Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { HomeLanding } from "./pages/HomeLanding";
import { SeriesInfo } from "./pages/SeriesInfo";
import { AllComics } from "./pages/AllComics";


export function App() {
  

  return (
    <div className=" bg-gradient-to-br from-sky-800 to-sky-600 w-screen min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomeLanding /> } />
        <Route path="/seriesinfo" element={ <SeriesInfo /> } />
        <Route path="/allcomics" element={ <AllComics /> } />
      </Routes>
    </div>
  )
}


