import { CSSProperties } from 'react';
import { BoxProps, ButtonProps } from '@chakra-ui/react';

// Chakra UIとCSSPropertiesを組み合わせた型
type ChakraBoxProps = Partial<BoxProps> & CSSProperties;
type ChakraButtonProps = Partial<ButtonProps> & CSSProperties;

// コンポーネント別のスタイル定義
export const componentStyles = {
  // SatelliteMapコンポーネント用スタイル
  satelliteMap: {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
    } as ChakraBoxProps,

    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'gray.50', // Chakra UIの色トークンに変更
      zIndex: 10,
    } as ChakraBoxProps,

    errorContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'red.50', // Chakra UIの色トークンに変更
    } as ChakraBoxProps,

    mapContainer: {
      width: '100%',
      height: '100%',
    } as ChakraBoxProps,
  },

  // Sidebarコンポーネント用スタイル
  sidebar: {
    container: {
      width: { base: "100%", md: "320px", lg: "320px" },
      height: '100vh',  // Chakra UIのプロパティ
      position: 'fixed',
      bg: 'linear-gradient(135deg, #f5f7fa 0%, #e8ebefff 100%)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      borderTopRightRadius: '24px',
      borderBottomRightRadius: '24px',
      transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1000,
      overflow: 'hidden',
    } as ChakraBoxProps,

    header: {
      width: '100%',
      height:'15%',
      position: 'relative',
      bg: 'white',
      borderBottom: '1px solid rgba(74, 144, 226, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
    } as ChakraBoxProps,

    title: {
      margin: 0,
      fontSize: '20px',
      color: '#4a90e2',
      fontWeight: '600',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    } as CSSProperties,

    closeButton: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      bg: 'rgba(255,255,255,0.8)',
      borderRadius: '50%',
      transition: 'all 0.2s',
    } as ChakraButtonProps,

    navButton: {
      borderRadius: '16px',
      h: '48px', // Chakra UIのプロパティ
      fontSize: '16px',
      fontWeight: '600',
      justifyContent: 'flex-start',
      transition: 'all 0.2s',
    } as ChakraButtonProps,

    // ナビゲーションボタンのバリエーション
    navButtonBlue: {
    } as ChakraButtonProps,

    navButtonGreen: {
    } as ChakraButtonProps,

    divider: {
      height: '1px', // Chakra UIのプロパティ
      bg: 'rgba(74, 144, 226, 0.2)',
      mb: '16px', // Chakra UIのプロパティ
      borderRadius: '50px',
    } as ChakraBoxProps,

    navSubButton:{
      size:"sm",  
      borderRadius: "12px",
    } as ChakraButtonProps
  },

  // ボタン用スタイル
  buttons: {
    menuButton: {
      position: 'fixed',
      top: '4px',
      left: '4px',
      zIndex: 1001,
    } as ChakraButtonProps,


    roundedButton: {
      borderRadius: '12px',
    } as ChakraButtonProps,

  },
} as const;