import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  padding-bottom: 1rem;
  border-radius: 5px;
  background-color: #90e0ef;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 750px) {
    width: 80%;
  }
`;

export default Container;
