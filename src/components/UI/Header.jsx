import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const TextOfHeader = styled.p`
    font-size: 8svw;
    text-align: center;
    border: 3px solid black;
    padding: 0px 20vw;
`
const Header = () => {
    return (
        <StyledHeader>
            <TextOfHeader>Pokedex</TextOfHeader>
        </StyledHeader>
    );
};

export default Header;