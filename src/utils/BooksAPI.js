const api = 'https://reactnd-books-api.udacity.com'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)

// Headers to be added to every request sent to the server
const headers = {
  Accept: 'application/json',
  Authorization: token,
}

// fetches details for a single book using id
export const get = bookId =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

// gets all books saved for a user, would list books in either "read", "currentlyReading" or "wantToRead" shelf, not the "none" shelf
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

// updates the shelf for a book
export const update = (bookId, shelf) =>
  fetch(`${api}/books/${bookId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shelf }),
  }).then(res => res.json())

// returns all books that match with the search query, books are fetched with "none" as shelf too
export const search = query =>
  query
    ? fetch(`${api}/search`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query.trim() }),
      })
        .then(res => res.json())
        .then(data => data.books)
    : Promise.resolve([])
