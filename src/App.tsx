import React from 'react';
import { AppRouter } from './routes';
import {BrowserRouter} from 'react-router-dom'
import { DrawerApp } from './shared/components/Drawer';

export const App=()=> {
  return (
   <>
   <BrowserRouter>
   <DrawerApp>
   <AppRouter/>
   </DrawerApp>
   </BrowserRouter>
   
   </>
  );
}

export default App;
