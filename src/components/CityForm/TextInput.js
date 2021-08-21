import styled from "styled-components";

const TextInput = styled.input.attrs(() => ({
  type: "text",
}))`
  appearance: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 60%;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
