import React from "react";

export default function BookItem({book}) {
  return (
    <div className="border-2 rounded-md border-blue-300 mb-4 p-4">
      <p>
        Title: <span className="text-gray-600">{book.title} </span>
      </p>
      <p>
        Author: <span className="text-gray-600">{book.author} </span>
      </p>
      <p>
        Price: <span className="text-gray-600">{book.price} </span>
      </p>
    </div>
  );
}