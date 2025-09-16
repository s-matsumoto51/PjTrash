import { MapStore } from "@/types";
import { create } from "zustand"; 

export const useMapStore = create<MapStore>((set)=>({
  map:null,
  isSidebarOpen:false,
  setMap:(map)=>set({map}),
  setIsSidebarOpen:(isSidebarOpen)=>set({isSidebarOpen})
}));



// import { create } from 'zustand';
// import type { MapInstance, MapConfig, Coordinates } from '@/types';

// interface MapState {
//   mapInstance: MapInstance;
//   config: MapConfig;
//   markers: google.maps.Marker[];

//   // Actions
//   setMapInstance: (map: google.maps.Map | null) => void;
//   setMapLoaded: (isLoaded: boolean) => void;
//   setMapError: (error: string | null) => void;
//   setMapConfig: (config: Partial<MapConfig>) => void;
//   addMarker: (marker: google.maps.Marker) => void;
//   removeMarker: (markerId: string) => void;
//   clearMarkers: () => void;
//   panTo: (coordinates: Coordinates) => void;
//   setZoom: (zoom: number) => void;
// }

// const defaultMapConfig: MapConfig = {
//   center: { lat: 35.6762, lng: 139.6503 }, // Tokyo
//   zoom: 10,
//   mapTypeId: 'satellite', 
// };

// export const useMapStore = create<MapState>((set, get) => ({
//   mapInstance: {
//     map: null,
//     isLoaded: false,
//     error: null,
//   },
//   config: defaultMapConfig,
//   markers: [],

//   setMapInstance: (map) =>
//     set((state) => ({
//       mapInstance: { ...state.mapInstance, map }
//     })),

//   setMapLoaded: (isLoaded) =>
//     set((state) => ({
//       mapInstance: { ...state.mapInstance, isLoaded }
//     })),

//   setMapError: (error) =>
//     set((state) => ({
//       mapInstance: { ...state.mapInstance, error }
//     })),

//   setMapConfig: (newConfig) =>
//     set((state) => ({
//       config: { ...state.config, ...newConfig }
//     })),

//   addMarker: (marker) =>
//     set((state) => ({
//       markers: [...state.markers, marker]
//     })),

//   removeMarker: (markerId) =>
//     set((state) => ({
//       markers: state.markers.filter((marker) => {
//         const markerWithId = marker as google.maps.Marker & { id?: string };
//         return markerWithId.id !== markerId;
//       })
//     })),

//   clearMarkers: () =>
//     set({ markers: [] }),

//   panTo: (coordinates) => {
//     const { mapInstance } = get();
//     if (mapInstance.map) {
//       mapInstance.map.panTo(coordinates);
//     }
//     set((state) => ({
//       config: { ...state.config, center: coordinates }
//     }));
//   },

//   setZoom: (zoom) => {
//     const { mapInstance } = get();
//     if (mapInstance.map) {
//       mapInstance.map.setZoom(zoom);
//     }
//     set((state) => ({
//       config: { ...state.config, zoom }
//     }));
//   },
// }));