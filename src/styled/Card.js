import styled from "styled-components";
export const Card = styled.div`
  --shadow-opacity: 0.1;
  background-color: white;
  border-radius: 16px;
  max-width: 100%;
  max-height: 175px;
  min-width: 320 - 32px;
  height: 175px;
  padding: ${(props) => props.padding || "20px"};
  box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, var(--shadow-opacity));
  -webkit-box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, var(--shadow-opacity));
  -moz-box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, var(--shadow-opacity));
`;

export default Card;
