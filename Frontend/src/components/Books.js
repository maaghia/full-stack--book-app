import React, { useEffect } from "react";
import BookItem from "./BookItem";
import BooksForm from "./BooksForm";

export default function Books({ books, setBooks }) {
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();
      setBooks(json);
    };

    fetchBooks();
  },);

  return (
    <div>
      <BooksForm setBooks={setBooks} />
      <div>
        {books.map((book) => {
          return (
            <BookItem book={book} key={book._id}/>
          );
        })}
      </div>
    </div>
  );
}