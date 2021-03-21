import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SocietyProvider} from './contextProviders/societyContext';
import { GlobalProvider } from './contextProviders/globalContext';
import { EquipmentProvider } from './contextProviders/equipmentContext';


ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <SocietyProvider>
                <EquipmentProvider>
                    <App />
                </EquipmentProvider>
        </SocietyProvider>
    </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
