import React from 'react';
import { AppRouter } from './routes';
import {BrowserRouter} from 'react-router-dom'
import { DrawerApp } from './shared/components/Drawer';
import { ThemeAppProvider } from './shared/context';

export const App=()=> {
  return (
   <ThemeAppProvider>
   <BrowserRouter>
   <DrawerApp>
   <AppRouter/>
   </DrawerApp>
   </BrowserRouter>
   </ThemeAppProvider>
  );
}


