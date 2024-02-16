// import { useState, useEffect } from 'react';
// import { useConstenful } from './UseContentful';
// import './App.css';
// import AuthorCard from './ArtistCard';

// function App() {
//   const [artist, setArtist] = useState([])
//   const {getArtists} = useConstenful();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getArtists();
//         console.log(response);
//       if (Array.isArray(response)) {
//         setArtist(response as any);
//       } else {
//         console.error('Invalid response format:', response);
//       }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [getArtists]);

//   return (
//     <>
//       {
//         artist.map((artist, index): any => <AuthorCard key={index} artist={artist}/>)
//       }
//     </>
//   );
// }

// export default App;
