import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: ${(props) => props.spacing || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export default Wrap;
