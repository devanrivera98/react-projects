export default function Homepage() {
  return (
    <>
      <NavBar />
      <TitlePage />
      <CustomBanner color="red" text="welcome" />
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
        <button class="btn btn-outline-dark my-2 my-sm-0 mx-3" type="submit">
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
      <CountButton onClick={handleClick} />
    </div>
  );
}

function CountButton({ count, onClick }) {
  return <button onClick={onClick}>{count}</button>;
}
