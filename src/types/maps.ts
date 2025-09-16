export type MapStore = {
  map: google.maps.Map| null;
  isSidebarOpen: boolean;
  isLoading: boolean;
  error: string | null;
  selectItem: 'satellite' | 'roadmap';
  setMap:(map:google.maps.Map) => void;
  setIsSidebarOpen:(isSidebarOpen:boolean) => void;
  setIsLoading:(isLoading:boolean) => void;
  setError:(error:string | null) => void;
  loadMap:(ref: React.RefObject<HTMLDivElement | null>) => Promise<void>;
  setSelectItem: (selectItem: 'satellite' | 'roadmap') => void;
}
