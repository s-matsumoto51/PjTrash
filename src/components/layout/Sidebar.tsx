'use client';

import { componentStyles } from "@/styles";
import { Box, CloseButton, VStack, Button, Text, Input } from "@chakra-ui/react";
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [selectedTab, setSelectedTab] = useState('map');
  const [selectItem,setSelectItem] = useState('satellite');

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
        <VStack gap={2} align="stretch" mb={6}>
          <Button
            {...componentStyles.sidebar.navButton}
            {...(selectedTab === 'map' ? componentStyles.sidebar.navButtonBlue : { bg: 'transparent' })}
            variant={selectedTab === 'map' ? 'solid' : 'ghost'}
            colorScheme="blue"
            onClick={() => setSelectedTab('map')}
          >
            地図表示
          </Button>

          <Button
            {...componentStyles.sidebar.navButton}
            {...(selectedTab === 'data' ? componentStyles.sidebar.navButtonGreen : { bg: 'transparent' })}
            variant={selectedTab === 'data' ? 'solid' : 'ghost'}
            colorScheme="green"
            onClick={() => setSelectedTab('data')}
          >
            日時選択
          </Button>
        </VStack>

        {/* 区切り線 */}
        <Box height="1px" bg="rgba(74, 144, 226, 0.2)" mb={4} borderRadius="full" />

        {/* タブコンテンツ */}
        <Box>
          {selectedTab === 'map' && (
            <VStack gap={3} align="stretch">
              <Text  mb={2}>地図設定</Text>
              <Button {...componentStyles.sidebar.navSubButton} onClick={()=>setSelectItem('satellite')} {...(selectItem !== 'satellite' && { variant: 'outline' })}>
                衛星写真
              </Button>
              <Button {...componentStyles.sidebar.navSubButton} onClick={()=>setSelectItem('map')} {...(selectItem !== 'map' && { variant: 'outline' })}>
                通常地図
              </Button>
            </VStack>
          )}

          {selectedTab === 'data' && (
            <VStack gap={3} align="stretch">
              <Text mb={2}> 日時選択</Text>
              <Input
                type="datetime-local" 
                size="sm"
                borderRadius="12px"
                
              />
            </VStack>
          )}
        </Box>
      </VStack>
    </Box>
  );
};





// import { Box, VStack, Text, Button} from '@chakra-ui/react';
// import { useState } from 'react';

// interface SidebarProps {
//   isOpen: boolean;
//   onToggle: () => void;
// }

// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
//   const [selectedTab, setSelectedTab] = useState('map');

//   return (
//     <Box
//       position="fixed"
//       left={isOpen ? 0 : -320}
//       top={0}
//       width="320px"
//       height="100vh"
//       bg="white"
//       borderRight="1px"
//       borderColor="gray.200"
//       boxShadow="lg"
//       transition="left 0.3s ease"
//       zIndex={1000}
//       overflowY="auto"
//     >
//       <VStack gap={0} align="stretch">
//         {/* ヘッダー */}
//         <Box p={4} borderBottom="1px" borderColor="gray.200">
//           <Text fontSize="xl" fontWeight="bold" color="blue.600">
//             海洋廃棄物Mark
//           </Text>
//           <Button
//             position="absolute"
//             top={4}
//             right={4}
//             size="sm"
//             variant="ghost"
//             onClick={onToggle}
//           >
//             ✕
//           </Button>
//         </Box>

//         {/* タブメニュー */}
//         <Box p={2}>
//           <VStack gap={1} align="stretch">
//             <Button
//               variant={selectedTab === 'map' ? 'solid' : 'ghost'}
//               colorScheme={selectedTab === 'map' ? 'blue' : 'gray'}
//               justifyContent="flex-start"
//               onClick={() => setSelectedTab('map')}
//             >
//               🗺️ 地図表示
//             </Button>
//             <Button
//               variant={selectedTab === 'data' ? 'solid' : 'ghost'}
//               colorScheme={selectedTab === 'data' ? 'blue' : 'gray'}
//               justifyContent="flex-start"
//               onClick={() => setSelectedTab('data')}
//             >
//               📊 データ管理
//             </Button>
//             <Button
//               variant={selectedTab === 'settings' ? 'solid' : 'ghost'}
//               colorScheme={selectedTab === 'settings' ? 'blue' : 'gray'}
//               justifyContent="flex-start"
//               onClick={() => setSelectedTab('settings')}
//             >
//               ⚙️ 設定
//             </Button>
//           </VStack>
//         </Box>

//         <Box height="1px" bg="gray.200" />

//         {/* コンテンツエリア */}
//         <Box p={4} flex={1}>
//           {selectedTab === 'map' && (
//             <VStack gap={4} align="stretch">
//               <Text fontWeight="semibold">地図表示設定</Text>
//               <Button size="sm" variant="outline">
//                 衛星写真
//               </Button>
//               <Button size="sm" variant="outline">
//                 通常地図
//               </Button>
//               <Button size="sm" variant="outline">
//                 ハイブリッド
//               </Button>
//             </VStack>
//           )}

//           {selectedTab === 'data' && (
//             <VStack gap={4} align="stretch">
//               <Text fontWeight="semibold">廃棄物データ</Text>
//               <Button size="sm" colorScheme="green">
//                 新規登録
//               </Button>
//               <Button size="sm" variant="outline">
//                 データ一覧
//               </Button>
//               <Button size="sm" variant="outline">
//                 統計情報
//               </Button>
//             </VStack>
//           )}

//           {selectedTab === 'settings' && (
//             <VStack gap={4} align="stretch">
//               <Text fontWeight="semibold">アプリ設定</Text>
//               <Button size="sm" variant="outline">
//                 表示設定
//               </Button>
//               <Button size="sm" variant="outline">
//                 データエクスポート
//               </Button>
//               <Button size="sm" variant="outline">
//                 ヘルプ
//               </Button>
//             </VStack>
//           )}
//         </Box>
//       </VStack>
//     </Box>
//   );
// };