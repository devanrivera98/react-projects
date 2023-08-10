import { useLocation } from 'react-router-dom';

export default function ResultsPage() {
  return <CharacterResults />;
}

function CharacterResults() {
  const location = useLocation();
  // const resultEntry = location.state
  const resultsComics = location.state.data.results[0].comics.items;
  console.log(resultsComics);

  let resultsMap = null;
  if (resultsComics.length) {
    resultsMap = resultsComics.map((resultsComics, index) => (
      <div key={index}>
        <div>{resultsComics.name}</div>
      </div>
    ));
  }
  console.log(resultsMap);
  return (
    <div>
      <img
        alt="marvel"
        src="https://www.teahub.io/photos/full/7-70354_marvel-logo-with-characters.jpg"
      />
      {resultsMap ? resultsMap : <div>There is nothing here</div>}
    </div>
  );
}
