import styled from 'styled-components'

const Container = styled.div ` 
    width: 100%;
    border: 1px solid black;
    padding-bottom: 1rem;
    border-radius: 5px;
    background-color: pink;
    margin-bottom: 1rem;

    @media (max-width: 750px) {
    width: 80%;
    }
    
`;

export default Container;