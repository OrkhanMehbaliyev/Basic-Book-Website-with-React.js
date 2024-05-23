import axios from "axios";
import { useEffect, useState } from "react";

const searchUrl = (id) => `https://www.googleapis.com/books/v1/volumes/${id}`;

export default function useBookDetails(id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [foundBook, setFoundBook] = useState({});

  useEffect(() => {
    fetchBook(id);
  }, [id]);

  function fetchBook(id) {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: searchUrl(id),
    })
      .then((res) => {
        const item = {
          id: res.data.id,
          title: res.data.volumeInfo.title,
          authors: res.data.volumeInfo.authors?.join(","),
          thumbnail: res.data.volumeInfo.imageLinks?.thumbnail,
          description: res.data.volumeInfo?.description,
        };
        setFoundBook(item);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(setLoading(false));
  }

  return { loading, foundBook, error };
}
