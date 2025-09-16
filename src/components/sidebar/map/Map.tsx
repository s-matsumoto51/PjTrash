import { Button, Text, VStack } from "@chakra-ui/react"
import { componentStyles } from "@/styles";
import { useMapStore } from "@/stores/mapStore";

// type MapProps ={
//     selectItem: string;
//     setSelectItem:(value:string)=> void
// }
// export const Map =({selectItem,setSelectItem}:MapProps)=>{
export const Map =()=>{
    const { selectItem,setSelectItem } = useMapStore();
    return(
        <VStack gap={3} align="stretch">
            <Text  mb={2}>地図設定</Text>
            <Button {...componentStyles.sidebar.navSubButton} onClick={()=>setSelectItem('satellite')} {...(selectItem !== 'satellite' && { variant: 'outline' })}>
            衛星写真
            </Button>
            <Button {...componentStyles.sidebar.navSubButton} onClick={()=>setSelectItem('roadmap')} {...(selectItem !== 'roadmap' && { variant: 'outline' })}>
            通常地図
            </Button>
        </VStack>
    )
}