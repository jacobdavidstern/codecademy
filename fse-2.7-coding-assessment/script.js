const searchBtn = document.getElementById("search-btn");

// Click handler for search button
const captureSearchValue = () => {
  const searchInput = document.querySelector("#search-bar"); 
  return searchInput.value;
};

// Filter books based on search input
const filterBooks = (searchString, books) => {
  return books.filter(book =>
    book.tags.some(tag => tag.toLowerCase() === searchString.toLowerCase())
  );
};

// Structure books for rendering
const structureBooksAsHtml = (filteredBooks) => {
  return filteredBooks.map(book => structureBookAsHtml(book));
};

// Handler for search button click
const searchBtnClickHandler = () => {  
  renderBooksToDom(structureBooksAsHtml(filterBooks(captureSearchValue(), books)));
};

// Attach event listener
searchBtn.addEventListener("click", searchBtnClickHandler);