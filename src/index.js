import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import AppOld from 'components/AppOld/AppOld';
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter basename="/goit-react-module-5">
            <AppOld />
        </BrowserRouter>
   </StrictMode>
);
