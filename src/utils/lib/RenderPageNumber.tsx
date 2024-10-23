export const renderPagesNumber = (totalPages: number, currentPage: number) => {
  const pageNumbers = [];
  const delta = 2;

  pageNumbers.push(1);

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    pageNumbers.push(i);
  }
  if (totalPages > 1) {
    pageNumbers.push(totalPages);
  }
  return pageNumbers;
};
