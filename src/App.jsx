import { Route, Routes } from "react-router";

import { LimitOffsetProvider } from "./contexts/limit-offset/LimitOffsetProvider";

import { HomeLanding } from "./pages/HomeLanding";
import { SeriesInfo } from "./pages/SeriesInfo";

import { Search } from "./pages/Search/Search";
// import { ComicSearch } from "./pages/Search/ComicSearch";
// import { CharacterSearch } from "./pages/Search/CharacterSearch";
// import { CreatorSearch } from "./pages/Search/CreatorSearch";
// import { EventSearch } from "./pages/Search/EventSearch";
// import { SerieSearch } from "./pages/Search/SerieSearch";
// import { StorySearch } from "./pages/Search/StorySearch";

import { AllResults } from "./pages/All/AllResults";

import { NavBar } from "./components/NavBar";

import { searchTypes } from "./helpers/APIdata";
import { EventsInfo } from "./pages/EventsInfo";
import { StoriesInfo } from "./pages/StoriesInfo";


export function App() {
  

  return (
    <LimitOffsetProvider>
      <div className=" bg-gradient-to-br from-sky-800 to-sky-600 w-screen min-h-screen">
        <NavBar />
        <main>        
          <Routes>
            <Route path="/" element={ <HomeLanding /> } />

            <Route path="/info/seriesinfo" element={ <SeriesInfo /> } />
            <Route path="/info/eventsinfo" element={ <EventsInfo /> } />
            <Route path="/info/storiesinfo" element={ <StoriesInfo /> } />

          {
            searchTypes.map( type => ( 
              <Route 
                key={ type.singular } 
                path={`/all/${ type.plural }`} 
                element={ <AllResults type= { type.plural } />}  
              />))
          }

          {
            searchTypes.map( type => ( 
              <Route 
                key={ type.singular } 
                path={`/search/${ type.singular }`} 
                element={ <Search type= { type } searchParam={ type.searchParam } />}  
              />))
          }

          
          </Routes>
        </main>
      </div>  
    </LimitOffsetProvider>
  )
}


