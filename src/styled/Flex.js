import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.spacing || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex: ${(props) => props.flex || "0 1 auto"};
  flex-basis: ${(props) => props.basis || "auto"};
  flex-grow: ${(props) => props.grow || "0"};
  flex-shrink: ${(props) => props.shrink || "1"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  max-height: ${(props) => props.maxHeight || "none"};
  flex-direction: ${(props) => props.direction || "row"};
`;

export default Flex;
