import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  & p {
    font-size: 1.1rem;
  }
  & h3 {
    font-size: 1.6rem;
  }
  &,
  & * {
    text-transform: capitalize;
  }
`;

export default CenteredDiv;
