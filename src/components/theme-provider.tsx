import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Specify the type for children since ThemeProviderProps doesn't include it
type Props = {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  // You can set default values for props here if needed
  return (
    <NextThemesProvider 
      enableSystem={true} 
      defaultTheme="light" // This will be the theme used on initial load
    >
      {children}
    </NextThemesProvider>
  );
}
