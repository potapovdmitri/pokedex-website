import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    width: 100%;
    height: 5rem;
    margin: 1rem 0;
    background-color: #008dff;
    border: 0;
    border-radius: 20px;
    &:hover{
        background-color: #010dff;
    }
`
const MyBtn = ({setOffset}) => {
    return (
        <StyledBtn onClick={() => {setOffset((prevOffset) => prevOffset + 12)}}>
            <p style={{color: 'white', fontWeight: "bold", fontSize:"25px"}}>Load More</p>
        </StyledBtn>
    );
};

export default MyBtn;