function fetchItemsToDisplay(
  items,
  sortParameter,
  sortOrder,
  itemsPerPage,
  pageNumber
) {
  // Map the sortParameter to the correct column index
  let columnIndex;
  if (sortParameter === 0) {
    columnIndex = 1; // Sort by relevance
  } else if (sortParameter === 1) {
    columnIndex = 2; // Sort by price
  } else if (sortParameter === 2) {
    columnIndex = 0; // Sort by name
  } else {
    throw new Error("Invalid sortParameter");
  }

  // Sort the items based on the selected column
  items.sort((a, b) => {
    const aValue = a[columnIndex];
    const bValue = b[columnIndex];

    if (columnIndex === 1 || columnIndex === 2) {
      // Convert relevance and price to numbers for correct comparison
      return sortOrder === 0 ? aValue - bValue : bValue - aValue;
    } else {
      // Compare strings (item names)
      return sortOrder === 0
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });

  // Pagination logic remains the same
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  const pageItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    pageItems.push(items[i][0]);
  }

  return pageItems;
}
