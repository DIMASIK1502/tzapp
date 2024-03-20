import styled, { keyframes } from "styled-components";

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const EllipsisContainer = styled.div`
  min-height: 12px;
  width: 70px;
  min-height: 30px;
  display: flex;
  position: relative;
`;

const EllipsisDot = styled.div`
  position: absolute;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color || "white"};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${ldsEllipsis1} 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }

  &:nth-child(3) {
    left: 32px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }

  &:nth-child(4) {
    left: 56px;
    animation: ${ldsEllipsis3} 0.6s infinite;
  }
`;

const LoaderDots = ({ color = "white" }) => {
  return (
    <EllipsisContainer>
      <EllipsisDot color={color} />
      <EllipsisDot color={color} />
      <EllipsisDot color={color} />
      <EllipsisDot color={color} />
    </EllipsisContainer>
  );
};

export default LoaderDots;
