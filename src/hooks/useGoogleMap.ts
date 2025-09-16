import { loader } from "@/lib/googleMaps";
import { useMapStore } from "@/stores/mapStore";
import { RefObject, useEffect, useState } from "react"

export const useGoogleMap=(ref:RefObject<HTMLDivElement|null>)=>{
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    const setMap = useMapStore(s=>s.setMap);

  useEffect(() => {
    setIsLoading(true);
    loader.load()
      .then(() => {
        if (ref.current) {
          const map = new google.maps.Map(ref.current, {
            center: { lat: 35.454, lng: 139.636 }, // 横浜市中心部
            zoom: 15, // 横浜全体が見えるズームレベル
            minZoom: 13, // 最小ズームレベル（これ以上縮小不可）
            mapTypeControl: false,
            mapTypeId: "satellite", // ← 衛星写真
          });
          setMap(map);
          setIsLoading(false); // ローディング完了
        }
      })
      .catch((error) => {
        setError(error.message || "地図の読み込みに失敗しました");
        setIsLoading(false);
      });
  }, [ref, setMap]);
  return{ isLoading,error}

}