import { useContext } from "react";

import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

import { LimitOffsetProvider } from "./contexts/limit-offset/LimitOffsetProvider";
import { AuthContext } from "./contexts/auth/AuthContext";

import { HomeLanding } from "./pages/HomeLanding";
import { SeriesInfo } from "./pages/Info/SeriesInfo";
import { EventsInfo } from "./pages/Info/EventsInfo";
import { StoriesInfo } from "./pages/Info/StoriesInfo";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

import { Search } from "./pages/Search/Search";

import { AllResults } from "./pages/All/AllResults";

import { NavBar } from "./components/NavBar";

import { searchTypes } from "./helpers/APIdata";
import { UnkwonPage } from "./pages/UnkwonPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { Footer } from "./components/Footer";




export function App() {
  
  const { state } = useContext( AuthContext )
 

  return (
    <LimitOffsetProvider>
      <div className=" bg-gradient-to-br from-primary to-primaryWhite w-screen min-h-screen">
        <NavBar />
        <main className="max-w-3xl mx-auto">        
          <Routes>
            <Route path="/" element={ <HomeLanding /> } />

            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />

            {
              state.logged
              ? <Route path="/favorites" element={ <FavoritesPage /> } />
              : <Route path="/favorites" element={ <Navigate to="/login" /> } />
            }
            

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

          <Route path="/*" element={ <UnkwonPage /> } />
          </Routes>
        </main>
        <Footer />
      </div>  
    </LimitOffsetProvider>
  )
}


