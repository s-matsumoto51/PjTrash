// import {create} from "zustand";

export type MapStore = {
  map: google.maps.Map| null;
  isSidebarOpen: boolean;
  setMap:(map:google.maps.Map) => void;
  setIsSidebarOpen:(isSidebarOpen:boolean) => void;
}

// export interface Coordinates {
//   lat: number;
//   lng: number;
// }

// export interface MapConfig {
//   center: Coordinates;
//   zoom: number;
//   mapTypeId?: google.maps.MapTypeId | string;
// }

// export interface MapInstance {
//   map: google.maps.Map | null;
//   isLoaded: boolean;
//   error: string | null;
// }

// export interface MapMarker {
//   id: string;
//   position: Coordinates;
//   title?: string;
//   description?: string;
// }

// export interface MapBounds {
//   north: number;
//   south: number;
//   east: number;
//   west: number;
// }

// export type MapEventHandler = (event: google.maps.MapMouseEvent) => void;

// export interface GoogleMapsLoaderOptions {
//   apiKey: string;
//   libraries?: ('places' | 'geometry' | 'drawing' | 'visualization')[];
//   language?: string;
//   region?: string;
// }