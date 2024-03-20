import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PaginationPage = styled.button`
  padding: 12px 16px;
  border-radius: 24px;
  font-size: 12px;
  margin: 0 4px;
  font-weight: bold;
  border: none;
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  cursor: pointer;
  transition: 0.3s;
`;

const Pagination = ({ totalPages, page, ...props }) => {
  const handlePageChange = (newPage) => () => {
    props?.onPageChange?.(newPage);
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationPage
          key={index}
          active={page === index + 1}
          onClick={handlePageChange(index + 1)}
        >
          {index + 1}
        </PaginationPage>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
