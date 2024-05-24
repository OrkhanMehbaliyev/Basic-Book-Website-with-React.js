import { useEffect, useState } from "react";
import axios from "axios";

const searchUrl = (searchStr, startIndex, numResults) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchStr}&startIndex=${startIndex}&maxResults=${numResults}`;

export default function useBookSearch(searchStr, startIndex, numResults) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    setLoading(true);

    //Debouncing
    const debounceTime = setTimeout(() => {
      if (searchStr.length == 0) {
        fetchBooks("a", startIndex, numResults);
      } else fetchBooks(searchStr, startIndex, numResults);
    }, 1000);

    return () => {
      clearTimeout(debounceTime);
    };
  }, [searchStr, startIndex, numResults]);

  function fetchBooks(searchStr, startIndex, numResults) {
    setError(false);

    axios({
      method: "GET",
      url: searchUrl(searchStr, startIndex, numResults),
    })
      .then((res) => {
        const items = res?.data?.items?.map((item) => ({
          id: item?.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors?.join(","),
          thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          description: item.volumeInfo.description,
        }));
        if (res?.data?.totalItems == 0) setNotFound(true);
        setSearchedBooks(items ?? []);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { loading, error, notFound, searchedBooks };
}
