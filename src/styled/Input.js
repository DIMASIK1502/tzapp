import styled from "styled-components";
export const Input = styled.input`
  --accent-color: rgb(250, 251, 253);
  --shadow-opacity: 0.1;
  box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, var(--shadow-opacity));
  -webkit-box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, var(--shadow-opacity));
  -moz-box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, var(--shadow-opacity));
  border-radius: 24px;
  border: 1px solid var(--accent-color);
  color: black;
  display: inline-block;
  font-size: 16px;
  padding: 14px 16px;
  transition: all 200ms ease-in-out;
  max-width: ${(props) => props.maxWidth || "320px"};
  width: ${(props) => props.width || "100%"};
`;

export default Input;
