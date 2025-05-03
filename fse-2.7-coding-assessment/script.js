// Click handler for search button
const captureSearchValue = () => {
  const searchInput = document.querySelector("#search-bar"); 
  return searchInput.value;
  // return searchInput.value.trim().toLowerCase();
};

// Filter books based on search input
// Takes in a search string and a list of books as parameters and returns all of the
// books that contain an exact match of the search input as an array of objects.
// Objects in this array should be formatted as books with title, author, and tags 
// properties, similar to the original books array. It should use the 
// flattenObjectValuesIntoArray() function to search all fields within a book object.
const filterBooks = (searchString, books) => {
  return books.filter(book => 
    flattenObjectValuesIntoArray([book])[0].some(value => value.includes(searchString))
  );
};

// Empty the book list container, iterate over list of filtered books, return list of 
// books formatted as HTML using the function in `helper.js` 
// Takes a list of books as a parameter, iterates over the list, formats them as 
// HTML using the structureBookAsHtml() helper function, and returns an array 
// of formatted book elements.
const structureBooksAsHtml = (filteredBooks) => {
return filteredBooks.map(book =>
  structureBookAsHtml(book)
};

// Handler triggered when a user clicks the "Search" button. Chains previously 
// defined functions together to filter books based on the search value, formats 
// the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
// renderBooksToDom
}

// Grab search button from the DOM


// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });