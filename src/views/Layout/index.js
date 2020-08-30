import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
`;
 const Layout = (params) => {
     return(
        <div>
            <Body>
                Hello!
            </Body>
        </div>
     )
 }
 
export default Layout;