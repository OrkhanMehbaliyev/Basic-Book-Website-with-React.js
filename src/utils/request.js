import slugger from "slugger";
import axios from "axios";

export async function fetchRandomBooks() {
  const maxResults = 40;
  const totalResults = 100;
  const requests = [];
  let books = [];

  console.log("Random books retreived");

  for (let i = 0; i < totalResults; i += maxResults) {
    const request = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=${maxResults}&startIndex=${i}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          data.items.forEach((item) => {
            const book = {
              title: item.volumeInfo.title || "No title available",
              id: item.id,
              authors: item.volumeInfo.authors || ["No authors available"],
              thumbnail:
                item.volumeInfo.imageLinks?.thumbnail ||
                "No thumbnail available",
              price: `$${Math.floor(100 * Math.random()) + 10}`,
              description:
                item.volumeInfo.description || "No description available",
            };
            books.push(book);
          });
        }
      })
      .catch((error) => console.error("Error fetching books:", error));
    requests.push(request);
  }

  await Promise.all(requests);

  books = books.slice(0, totalResults);
  books = books.filter((book) => book.thumbnail != "No thumbnail available");

  return books;
}

const searchUrl = (searchStr, startIndex, numResults) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchStr}&startIndex=${startIndex}&maxResults=${numResults}`;

export default async function fetchInitialBooks(
  searchStr,
  startIndex,
  numResults
) {
  let items = await axios({
    method: "GET",
    url: searchUrl(searchStr, startIndex, numResults),
  });

  items = items.data.items.map((item) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors?.join(","),
    thumbnail: item.volumeInfo.imageLinks?.thumbnail,
    description: item.volumeInfo.description,
  }));

  return items;
}
