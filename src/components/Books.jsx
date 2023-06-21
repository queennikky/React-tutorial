import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h2>Title: {book.title} </h2>
    </div>
  );
};
//outputtin list
const Books = () => {
  const books = [
    { id: 1, title: "Sugar Girl" },
    { id: 2, title: "Drummer Boy" },
    { id: 3, title: "Our Husband has gone mad again" },
    { id: 4, title: "Our wives has gone mad again" },
    { id: 5, title: "Another One" },
  ];
  return (
    <div>
      <h3>Bestselling books</h3>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default Books;
