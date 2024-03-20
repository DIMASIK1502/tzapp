import styled from "styled-components";
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px 16px;
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;

export default Grid;
