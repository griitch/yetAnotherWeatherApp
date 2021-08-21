import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1100px) and (min-width: 751px) {
    grid-template-columns: 1fr 1fr;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem 2rem;
  justify-items: center;
  align-items: center;
`;

export default Container;
