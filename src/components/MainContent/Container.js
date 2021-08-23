import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 650px) {
    width: 100%;
  }

  width: 90%;
  margin: auto;

  & h1 {
    text-align: center;
    color: white;
  }
`;

export default Container;
