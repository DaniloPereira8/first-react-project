import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import Routes from './routes'



const root = createRoot(document.getElementById('root'));
root.render( <> <Routes /> <GlobalStyle /> </> );



// ReactDOM.render(
//     <>
//         <App /> <GlobalStyle />
//     </>,

//     document.getElementById('root')
// );