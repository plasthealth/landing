import React from 'react';
import styled from 'styled-components';
import Logo from './images/logo.svg';
import LogoTitle from './images/logo-title.svg';

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202630; 
`;

const Image = styled.img`
    width: 8%;
`;

const Title = styled.img`
    width: 15%;
`;


function App() {
    return (
        <Body>
            <Image src={Logo} />
            <div style={{height: '25px'}} />
            <Title src={LogoTitle} />
            <div style={{marginBottom: '50px'}} />
        </Body>
    );
}

export default App;
