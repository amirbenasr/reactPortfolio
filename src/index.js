import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//importing models
import { books_5 } from "./5_books";
//explicit function

//implicit function
const Title = () => {
  return <h1>We Were Liars</h1>;
};
const Author = () => <h4>E. Lockhart</h4>;

const books = [
  {
    title: "we are liars",
    author: "E. erkhoml",
  },
  {
    title: "el kitsh el 3arabi",
    author: "Safi said",
  },
];
//normal function
function Book({ book, children }) {
  const title = "We Were Liars";
  const Author = "E. lockhart";
  const clickEvent = () => {
    alert(book.title);
  };
  const dataHandler = (bookiz) => {
    alert(bookiz.title);
  };
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/916kdpY0YRL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{book.title}</h1>
      <h4>{book.author ?? "nothing"}</h4>
      <button onClick={clickEvent}>click to show title</button>
      <button onClick={() => dataHandler(book)}>
        send data to event handler
      </button>
      {children}
    </article>
  );
}
var book = {
  title: "we are liars",
  author: "E. lockhart",
};
function BookList() {
  console.log(books_5.length);
  return (
    <section className="booklist">
      {books.map((e, index) => {
        return <Book key={index} book={e}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList></BookList>, document.getElementById("root"));
export default Book;
