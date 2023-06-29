import { useState } from 'react';
import { resultsBook } from './data';

export default function Homepage() {
  return (
    <>
      <NavBar />
      <TitlePage />
      <CustomBanner color="red" text="welcome" />
      <ResultsList />
    </>
  );
}

function NavBar() {
  return (
    <nav
      style={{ backgroundColor: '#526D82' }}
      className="navbar justify-content-between py-3">
      <a className="navbar-brand px-3" href="none">
        Practice Website
      </a>
      <form className="form-inline">
        <input
          className="mr-sm-2 mx-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-dark my-2 my-sm-0 mx-3"
          type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

function TitlePage() {
  return (
    <div>
      <div className="text-center">
        <img
          className="img-fluid w-25"
          alt="practice-banner"
          src="https://thumbs.dreamstime.com/b/best-practice-best-practice-speech-bubble-best-practice-sign-best-practice-banner-153272040.jpg?w=1600"
        />
      </div>
    </div>
  );
}

function CustomBanner({ text, color }) {
  function handleClick() {
    console.log('this is being clicked');
  }

  return (
    <div onClick={handleClick}>
      <h3 style={{ color: color }}>{text}</h3>
    </div>
  );
}

function ResultsList() {
  const booksMap = resultsBook.map((book) => (
    <div key={book.isbn}>
      <div>{book.title}</div>
    </div>
  ));

  const [sorting, setSorting] = useState(booksMap);
  console.log('this is the book map', booksMap);

  function handleClick() {
    const sortedBooks = resultsBook.sort((a, b) => {
      return Number(a.isbn) - Number(b.isbn);
    });
    const sortedBooksMap = sortedBooks.map((book) => (
      <div key={book.isbn}>
        <div>{book.title}</div>
      </div>
    ));
    setSorting(sortedBooksMap);
    console.log('this is running', resultsBook);
  }

  return (
    <>
      <button onClick={handleClick}>Clicked</button>
      {sorting}
    </>
  );
}
