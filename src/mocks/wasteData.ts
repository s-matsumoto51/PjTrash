// 海洋廃棄物のモックデータ
export interface WasteItem {
  id: string;
  type: 'plastic' | 'metal' | 'glass' | 'other';
  location: {
    lat: number;
    lng: number;
  };
  description: string;
  reportedAt: string;
  status: 'reported' | 'confirmed' | 'cleaned';
}

export const mockWasteData: WasteItem[] = [
  {
    id: '1',
    type: 'plastic',
    location: { lat: 35.4535, lng: 139.6363 },
    description: 'ペットボトルの散乱',
    reportedAt: '2024-01-15T10:30:00Z',
    status: 'reported'
  },
  {
    id: '2',
    type: 'metal',
    location: { lat: 35.4520, lng: 139.6350 },
    description: '空き缶の投棄',
    reportedAt: '2024-01-16T14:20:00Z',
    status: 'confirmed'
  },
  {
    id: '3',
    type: 'plastic',
    location: { lat: 35.4555, lng: 139.6380 },
    description: 'ビニール袋の漂流物',
    reportedAt: '2024-01-17T09:15:00Z',
    status: 'cleaned'
  }
];

// APIレスポンスのモック
export const mockApiResponse = {
  data: mockWasteData,
  total: mockWasteData.length,
  page: 1,
  limit: 10
};