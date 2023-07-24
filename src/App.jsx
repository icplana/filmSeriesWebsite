import { Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { HomeLanding } from "./pages/HomeLanding";
import { SeriesInfo } from "./pages/SeriesInfo";
import { AllComics } from "./pages/AllComics";
import { Search } from "./pages/Search/Search";
import { ComicSearch } from "./pages/Search/ComicSearch";
import { CharacterSearch } from "./pages/Search/CharacterSearch";
import { CreatorSearch } from "./pages/Search/CreatorSearch";
import { EventSearch } from "./pages/Search/EventSearch";
import { SerieSearch } from "./pages/Search/SerieSearch";
import { StorySearch } from "./pages/Search/StorySearch";


export function App() {
  

  return (
    <div className=" bg-gradient-to-br from-sky-800 to-sky-600 w-screen min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomeLanding /> } />
        <Route path="/seriesinfo" element={ <SeriesInfo /> } />
        <Route path="/allcomics" element={ <AllComics /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/search/comic" element={ <ComicSearch /> } />
        <Route path="/search/character" element={ <CharacterSearch /> } />
        <Route path="/search/creator" element={ <CreatorSearch /> } />
        <Route path="/search/event" element={ <EventSearch /> } />
        <Route path="/search/serie" element={ <SerieSearch /> } />
        <Route path="/search/story" element={ <StorySearch /> } />
      </Routes>
    </div>
  )
}


