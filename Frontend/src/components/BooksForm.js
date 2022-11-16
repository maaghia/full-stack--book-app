import React, { useState } from "react";

export default function BooksForm({setBooks}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  console.log(title);

  const handleAddBook = async () => {
    const book = { title, price, author };

    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    const json = await response.json()

    console.log(json)

    setBooks(prevState => [...prevState, json])
    
  };
  return (
    <div className="mb-4">
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <label>price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <button
        onClick={handleAddBook}
        className="m-2 bg-blue-300 p-2 rounded-sm block mx-auto"
      >
        Add Book
      </button>
    </div>
  );
}