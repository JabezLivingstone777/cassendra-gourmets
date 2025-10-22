"use client";
import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  useEffect(() => {
    // This effect runs only on the client side
    // It helps prevent hydration warnings for browser extension attributes
  }, []);

  return <>{children}</>;
}
