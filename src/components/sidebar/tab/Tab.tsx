import { Button, VStack } from "@chakra-ui/react"
import { componentStyles } from "@/styles";

type TabType={
    selectedTab:string;
    setSelectedTab:(value:string)=>void
}
export const Tab =({selectedTab,setSelectedTab}:TabType)=>{
    return(
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
    )
}