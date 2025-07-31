export const pagination = (pageSizeProps, pageIndexProps, items) => {
  let pageSize = parseInt(pageSizeProps) || 10;
  let pageIndex = parseInt(pageIndexProps) || 0;
  let count = items.length;
  let page = Math.floor(count / pageSize) + 1;
  let hasPrev = pageIndex > 0;
  let hasNext = (pageIndex + 1) * pageSize < count;

  const paginatedItems = items
    .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  return {
    items: paginatedItems,
    count,
    page,
    pageIndex,
    pageSize,
    hasPrev,
    hasNext,
  };
};
