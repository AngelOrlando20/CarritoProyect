import { atom } from "jotai";
import { Temperatura } from "../model/Temperatura";
import { Presion } from "../model/Presion";
import { Distancia } from "../model/Distancia";

export const one = 1;

// UI
//
// NavigationDrawer.tsx
export const DrawerWidth = atom<number>(300);
// App Bar Title (PagesAppBar.tsx)
export const HeaderTitle = atom('')
// Is Option Menu Open? (OptionMenu.tsx)
export const isOptMenuOpen = atom(false)

// DATA
//
// Latest Fetch
export const AppBarFetchStatus = atom("Los datos están siendo procesados...");
// Fetching IP
export const FetchIP = atom('https://lucky-processor-406015.ue.r.appspot.com/')
// DATA Variables
export const TemperatureData = atom<Temperatura[]>([]);
export const PresionData = atom<Presion[]>([]);
export const DistanciaData = atom<Distancia[]>([]);

export const TempLoaded = atom<boolean>(false);
export const PresionLoaded = atom<boolean>(false);
export const DistanciaLoaded = atom<boolean>(false);

// THEME
//
// Is Theme Dark?
export const IsDarkTheme = atom(true)

// MODALS
//
// CarController.tsx
export const CarControllerAnchor = atom<HTMLButtonElement | null>(null);