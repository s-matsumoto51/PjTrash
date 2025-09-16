'use client';
import { RefObject, useEffect, useState } from "react";
import { loader } from "./googleMaps";
import { useMapStore } from "@/stores/mapStore";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

type GetMapsProps = {
  ref1: RefObject<HTMLDivElement | null>;
};
 export const GetMaps =({ref1}:GetMapsProps)=>{
  const [isLoading,setIsLoading] = useState(true);
  const[error,setError] = useState(null);
  const setMap = useMapStore((s) => s.setMap);

  useEffect(() => {
    setIsLoading(true);
    loader.load()
      .then(() => {
        if (ref1.current) {
          const map = new google.maps.Map(ref1.current, {
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
  }, [ref1, setMap]);

    if (error) {
      return (
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="red.50"
        >
          <VStack gap={4}>
            <Text fontSize="lg" color="red.600" fontWeight="medium">
              エラーが発生しました
            </Text>
            <Text fontSize="sm" color="red.500">
              {error}
            </Text>
          </VStack>
        </Box>
      );
    }

  return(
    <>
      {/* ローディング画面 */}
      {isLoading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
          zIndex={10}
        >
          <VStack gap={4}>
            <Spinner size="xl" color="blue.500" />
            <Text fontSize="lg" color="gray.600" fontWeight="medium">
              地図を読み込み中...
            </Text>
            <Text fontSize="sm" color="gray.500">
              Google Maps APIを初期化しています
            </Text>
          </VStack>
        </Box>
      )}
      </>
  )
 }
 
 
