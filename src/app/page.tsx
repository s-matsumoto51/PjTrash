'use client';

import { Box, Button } from "@chakra-ui/react";
import { Sidebar } from "@/components/sidebar";
import { SatelliteMap } from "@/components/maps";
import { useMapStore } from "@/stores/mapStore";

export default function Home() {
  const { isSidebarOpen, setIsSidebarOpen,map } = useMapStore();


  return (
    <Box display="flex" width="100vw" height="100vh" suppressHydrationWarning>
      {/* 地図エリア */}
      <Box
        width="100%"
        height="100%"
        marginLeft={isSidebarOpen ? { base: "0", md: "320px", lg: "350px" } : "0"}
        transition="margin-left 0.3s ease"
      >
        <SatelliteMap />
      </Box>
      <Box>
        {/* サイドバー */}
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* メニューボタン */}
        {!isSidebarOpen && map &&(
          <Button
            position="fixed"
            top={4}
            left={4}
            zIndex={1001}
            colorScheme="blue"
            size="sm"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </Button>
        )}
      </Box>

      {/* オーバーレイ（モバイル用） */}
      {isSidebarOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="blackAlpha.500"
          zIndex={999}
          onClick={() => setIsSidebarOpen(false)}
          display={{ base: 'block', md: 'none' }}
        />
      )}
    </Box>
  );
}
