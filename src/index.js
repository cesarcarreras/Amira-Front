import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {CSSReset, ThemeProvider} from '@chakra-ui/react';
import theme from './theme.js';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from '@utils/AuthContext';
import { App } from './App';

ReactDOM.render(
    <AuthProvider>
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </AuthProvider>,
document.getElementById('root')
);

serviceWorker.unregister();
