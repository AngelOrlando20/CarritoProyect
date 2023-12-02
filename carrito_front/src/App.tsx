import ResponsiveDrawer from "./components/Sidebar";
import './App.css';

import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Graphs from './views/Graphs'
import Team from './views/Team';
import Data from './views/Data';
import Info from './views/Info';
import Amlo from './views/Amlo';
import Options from './views/Options';

import { LightTheme, DarkTheme } from './utils/themes';
import { useAtom } from 'jotai';
import { DistanciaData, FetchIP, IsDarkTheme, PresionData, TemperatureData } from './state/data';
import Home from './views/Home';
import { createContext, useEffect, useState } from "react";
import { Temperatura } from "./model/Temperatura";
import axios from "axios";
import { Presion } from "./model/Presion";
import { Distancia } from "./model/Distancia";

// TODO: 
// 1. Implementar GRIDS para toda la interfaz.
// 2. Implementar un DRAWER que se pueda retraer.
// 3. Colocar un fondo más chachi (con gradiente, THREEJS???)

function App() {

  return (
    <BrowserRouter>
      <MainSite content={
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/graph' element={<Graphs />} />
          <Route path='/team' element={<Team/>} />
          <Route path='/data' element={<Data/>}/>
          <Route path="/info" element={<Info/>} />
          <Route path="/peje" element={<Amlo/>} />
          <Route path="/opts" element={<Options/>}/>
          <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
      } />
    </BrowserRouter>
  );
}

interface MainSiteContent {
  content: JSX.Element;  
}

function MainSite({ content }: MainSiteContent) {
  const [isDark] = useAtom(IsDarkTheme)

  return (
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
          <ResponsiveDrawer content_page={content}></ResponsiveDrawer>
      </ThemeProvider>
  );
}
export default App;
