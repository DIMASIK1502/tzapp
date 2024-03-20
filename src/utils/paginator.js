export const paginator = (dataArray = [], page = 1, pageSize = 20) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = dataArray.slice(start, end);
  const totalPages = Math.ceil(dataArray.length / pageSize);
  return {
    page,
    pageSize,
    data: paginatedData || [],
    totalPages,
  };
};

export default paginator;
