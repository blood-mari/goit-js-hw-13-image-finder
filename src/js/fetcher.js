// тест-fetcher

const BASE_URL = 'http://localhost:3000';

function fetchBook() {
    return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBooksById(bookId) {
    return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

function postBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book),
    }
    return fetch(`${BASE_URL}/books`, options).then(res => res.json()).then(console.log);
}

function updateBookById(update, bookIt) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update),
    }
    return fetch(`${BASE_URL}/books/${bookIt}`, options).then(res => res.json()).then(console.log);
}

// updateBookById({title: "Remember JSON", genres: ["JSON", "JS"]}, 8);

// postBook(
//     {
//         title: "Debugging",
//         author: "Whoever",
//         genres: [
//             "rest"
//         ],
//         rating: 8
//     });

// fetchBook();

// fetchBooksById(4);



