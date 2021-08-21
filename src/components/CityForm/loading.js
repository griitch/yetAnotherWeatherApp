import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.img`
  @media (min-width: 580px) {
    margin-top: 1rem;
  }
  animation: ${rotate} 2.5s linear infinite;
 
`;


export default Loading;
