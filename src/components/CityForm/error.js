import styled from "styled-components";
import CenteredDiv from "../shared/CenteredDiv";

const Error = styled(CenteredDiv)`
  background-color: tomato;
  width: 80%;
  border: 2px solid red;
  color: white;
  padding: 0.75rem 0;
  border-radius: 5px;
  font-size: 1.2rem;

  @media (min-width: 580px) {
    margin-top: 1rem;
  }
`;

export default Error;
