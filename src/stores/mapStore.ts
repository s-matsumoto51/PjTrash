import { MapStore } from "@/types";
import { create } from "zustand";
import { loader } from "@/lib/googleMaps";
import { RefObject } from "react";

export const useMapStore = create<MapStore>((set, get)=>({
  map: null,
  isSidebarOpen: false,
  isLoading: true,
  error: null,
  selectItem:'satellite',
  setMap: (map) => set({ map }),
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setSelectItem: (value: 'satellite' | 'roadmap') => set({ selectItem: value }),
  loadMap: async (ref:RefObject<HTMLDivElement | null>) => {
    const { setMap, setIsLoading, setError,selectItem } = get();

    try {
      setIsLoading(true);
      setError(null);

      await loader.load();

      if (ref.current) {
        const map = new google.maps.Map(ref.current, {
          center: { lat: 35.454, lng: 139.636 }, // 横浜市中心部
          zoom: 15, // 横浜全体が見えるズームレベル
          minZoom: 13, // 最小ズームレベル（これ以上縮小不可）
          mapTypeControl: false,
          // mapTypeId: "satellite", // 衛星写真
          mapTypeId: selectItem, // 衛星写真
        });

        setMap(map);
        setIsLoading(false);
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "地図の読み込みに失敗しました");
      setIsLoading(false);
    }
  },
}));

