import styled from "styled-components";
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.padding || "0 16px"};
`;

export default Container;
