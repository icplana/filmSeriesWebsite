import { Route, Routes } from "react-router";

import { LimitOffsetProvider } from "./contexts/limit-offset/LimitOffsetProvider";
import { AuthProvider } from "./contexts/auth/AuthProvider";

import { HomeLanding } from "./pages/HomeLanding";
import { SeriesInfo } from "./pages/Info/SeriesInfo";

import { Search } from "./pages/Search/Search";


import { AllResults } from "./pages/All/AllResults";

import { NavBar } from "./components/NavBar";

import { searchTypes } from "./helpers/APIdata";
import { EventsInfo } from "./pages/Info/EventsInfo";
import { StoriesInfo } from "./pages/Info/StoriesInfo";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";



export function App() {
  

  return (
    <AuthProvider>
      <LimitOffsetProvider>
        <div className=" bg-gradient-to-br from-sky-800 to-sky-600 w-screen min-h-screen">
          <NavBar />
          <main>        
            <Routes>
              <Route path="/" element={ <HomeLanding /> } />

              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/register" element={ <RegisterPage /> } />

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
    </AuthProvider>
  )
}


