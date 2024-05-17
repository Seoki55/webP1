import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    background: #e9ecef;
}
`;
function App(){
    return(
     <>
        <GlobalStyle/>
        <div>또 당신입니까? G.O.A.T !!!</div>
     </>
    );
}
export default App;

