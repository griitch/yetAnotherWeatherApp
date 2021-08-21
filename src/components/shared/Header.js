import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 650px) {
    justify-content: ${(props) => (props.navbar ? "center" : "space-around")};
    & h1,
    & h3 {
      display: none;
    }
  }
  overflow: hidden;
  height: 60px;
  background-color: ${(props) => props.bgColor || "gray"};
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: capitalize;

  & a {
    text-decoration: none;
    color: inherit;
    padding-left: 0.5rem;
  }

  & a:hover {
    color: aqua;
  }

  color: white;
`;

export default Container;
