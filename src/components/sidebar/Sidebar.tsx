'use client';

import { componentStyles } from "@/styles";
import { Box, CloseButton, VStack} from "@chakra-ui/react";
import { useState } from 'react';
import { Date } from "./date/Date";
import { Map } from "./map/Map";
import { Tab } from "./tab/Tab";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [selectedTab, setSelectedTab] = useState('roadmap');

  return (
    <Box
      {...componentStyles.sidebar.container}
      left={isOpen ? 0 : '-320px'}
    >
      {/* ヘッダー部分 */}
      <Box {...componentStyles.sidebar.header}>
        <h2 style={{
          ...componentStyles.sidebar.title
        }}>
          海洋清掃
        </h2>
        <CloseButton {...componentStyles.sidebar.closeButton} onClick={onToggle}
        />
      </Box>

      {/* コンテンツエリア */}
      <VStack gap={0} align="stretch" p={4}>
        {/* ナビゲーションボタン */}
        <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {/* 区切り線 */}
        <Box height="1px" bg="rgba(74, 144, 226, 0.2)" mb={4} borderRadius="full" />
        {/* タブコンテンツ */}
        <Box>
          {/* 地図表示タブのアイテム */}
          {selectedTab === 'map' && (
            // <Map selectItem={selectItem} setSelectItem={setSelectItem}/>
            <Map/>
          )}
          {/* 日時選択タブのアイテム */}
          {selectedTab === 'data' && (
            <Date/>
          )}
        </Box>
      </VStack>
    </Box>
  );
};
