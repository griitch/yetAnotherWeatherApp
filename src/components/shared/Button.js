import styled from 'styled-components'

const Button = styled.button `

    padding : ${ props => props.py ? props.py + 'rem' : '0.2rem' } ${ props => props.px ? props.px + 'rem' : '0.5rem' } ;
    appearance: none;
    background-color : ${ props => props.bgColor || 'gray' };
    border-radius: 8px;
    font-size: 1.5rem;
    color: ${ props => props.text || 'black' };
    margin: 0 0 0 1rem;
    border: none;
    &:hover {
        background-color: ${ props => props.hover || 'black' };
        cursor: pointer;
    }
`;

export default Button;