import styled from "styled-components";

const Container = styled.form`
  @media (max-width: 1020px) {
    width: 80%;
  }

  @media (max-width: 580px) {
    & * {
      margin-top: 1rem;
    }
  }

  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem auto;
`;

export default Container;
