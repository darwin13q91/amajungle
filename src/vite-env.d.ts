/// <reference types="vite/client" />

declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      minimize: () => void;
      toggle: () => void;
      popup: () => void;
      hideWidget: () => void;
      showWidget: () => void;
      onLoad?: () => void;
    };
  }
}

export {};
