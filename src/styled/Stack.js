import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.spacing || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export default Stack;
