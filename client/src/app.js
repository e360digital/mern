import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import MetaLengthChecker from './components/MetaLengthChecker/MetaLengthChecker';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ROAScalculator from './components/ROAScalculator/ROAScalculator';
import LeadsConversionRate from './components/LeadsConversionRate/LeadsConversionRate';


/** root routes */
const router = createBrowserRouter([
   
    {
        path : '/meta-length-checker',
        element : <MetaLengthChecker/>
    },
    
    {
        path : '/color-picker',
        element : <ColorPicker/>
    },

    {
        path : '/leads-conversion-rate',
        element : <LeadsConversionRate/>
    },


])

export default function App() {
 return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
