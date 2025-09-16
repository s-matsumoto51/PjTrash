'use client';

import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { componentStyles } from "@/styles";
import { useMapStore } from "@/stores/mapStore";

export const SatelliteMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isLoading, error, loadMap, selectItem } = useMapStore();

  useEffect(() => {
    if (ref.current) {
      loadMap(ref);
    }
  }, [loadMap, selectItem]);

  // エラー表示
  if (error) {
    return (
      <Box {...componentStyles.satelliteMap.errorContainer}>
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

  return (
    <Box {...componentStyles.satelliteMap.mapContainer}>
      {/* ローディング画面 */}
      {isLoading && (
        <Box {...componentStyles.satelliteMap.loadingOverlay}>
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

      {/* 地図コンテナ */}
      <div ref={ref} style={componentStyles.satelliteMap.mapContainer} />
    </Box>
  );
};

