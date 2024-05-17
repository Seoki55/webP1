import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
body {
background: #e9ecef;
}
`;

function App() {
    return (
    <>
    <GlobalStyle />
    <TodoTemplate>또 당신입니까? G.O.A.T !!!</TodoTemplate>
    </>
    );
    }
    export default App;
    